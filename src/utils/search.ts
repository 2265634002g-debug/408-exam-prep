import type { KnowledgePoint } from '@/types/knowledge';
import { allKnowledgePoints } from '@data/knowledge-points';

export interface SearchResult {
  kp: KnowledgePoint;
  score: number;
  matchedTerms: string[];
  snippet: string;
}

// Split Chinese/English text into meaningful tokens
function tokenize(text: string): string[] {
  const tokens = new Set<string>();
  const cleaned = text.toLowerCase().trim();
  tokens.add(cleaned);

  // Split by Chinese question words and punctuation
  const words = cleaned
    .split(/[，,、。！？\s：:（）()""''什么是如何怎样为什么有哪些哪个哪种怎么]+/)
    .filter(w => w.length >= 2);
  words.forEach(w => tokens.add(w));

  // Extract n-grams from Chinese text (2-4 chars)
  for (const word of words) {
    if (/[一-鿿]/.test(word) && word.length >= 3) {
      for (let i = 0; i <= word.length - 2; i++) {
        for (let len = 2; len <= Math.min(4, word.length - i); len++) {
          tokens.add(word.slice(i, i + len));
        }
      }
    }
  }

  return [...tokens];
}

function extractSnippet(content: string, terms: string[], maxLen = 100): string {
  const lower = content.toLowerCase();
  let bestIdx = -1;
  let bestTermLen = 0;

  for (const term of terms) {
    const idx = lower.indexOf(term.toLowerCase());
    if (idx !== -1 && term.length > bestTermLen) {
      bestIdx = idx;
      bestTermLen = term.length;
    }
  }

  if (bestIdx === -1) {
    return content.slice(0, maxLen) + (content.length > maxLen ? '...' : '');
  }

  const start = Math.max(0, bestIdx - 30);
  const end = Math.min(content.length, bestIdx + bestTermLen + 50);
  let snippet = content.slice(start, end);
  // Trim to whole chars at boundaries
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet += '...';
  if (snippet.length > maxLen + 20) {
    snippet = snippet.slice(0, maxLen) + '...';
  }
  return snippet;
}

export function smartSearch(query: string, limit = 12): SearchResult[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase().trim();
  const tokens = tokenize(q);
  const results = new Map<string, { score: number; terms: Set<string> }>();

  for (const kp of allKnowledgePoints) {
    let score = 0;
    const matchedTerms = new Set<string>();

    const titleLower = kp.title.toLowerCase();
    const contentLower = kp.content.toLowerCase();

    // 1. Title match (highest weight)
    if (titleLower === q) {
      score += 100;
      matchedTerms.add(kp.title);
    } else if (titleLower.includes(q)) {
      score += 40;
      matchedTerms.add(kp.title);
    }

    // 2. Multi-token matching against title and keyConcepts
    for (const token of tokens) {
      if (token === q) continue; // already scored above

      // Title partial match
      if (titleLower.includes(token)) {
        score += 20;
        matchedTerms.add(token);
      }

      // keyConcepts match
      for (const concept of kp.keyConcepts) {
        const c = concept.toLowerCase();
        if (c === token) {
          score += 30;
          matchedTerms.add(concept);
        } else if (c.includes(token) || token.includes(c)) {
          score += 12;
          matchedTerms.add(concept);
        }
      }

      // Content match
      if (contentLower.includes(token)) {
        score += 6;
      }
    }

    // 3. Full query match in content
    if (!titleLower.includes(q) && contentLower.includes(q)) {
      score += 8;
    }

    if (score > 0) {
      results.set(kp.id, { score, terms: matchedTerms });
    }
  }

  // Sort by score descending, then by KP index (stable ordering)
  const sorted = Array.from(results.entries())
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, limit);

  return sorted.map(([kpId, { score, terms }]) => {
    const kp = allKnowledgePoints.find(k => k.id === kpId)!;
    return {
      kp,
      score,
      matchedTerms: [...terms],
      snippet: extractSnippet(kp.content, [...terms]),
    };
  });
}
