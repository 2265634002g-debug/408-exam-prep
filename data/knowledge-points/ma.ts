import type { KnowledgePoint } from '@/types/knowledge';

export const maKnowledgePoints: KnowledgePoint[] = [
  // ============================================================
  // 第1章 函数、极限与连续
  // ============================================================

  {
    id: 'ma-1-1-1', chapterId: 'ma-1',
    title: '函数的概念、性质与初等函数',
    keyConcepts: ['函数', '定义域', '值域', '单调性', '奇偶性', '周期性', '有界性', '初等函数'],
    relatedPoints: [],
    content: `## 函数的定义
> 设 $D \\subset \\mathbb{R}$ 为非空数集，$f$ 为对应法则，若对每个 $x \\in D$，存在唯一的 $y \\in \\mathbb{R}$ 与之对应，则称 $f$ 为定义在 $D$ 上的函数。

记作 $y = f(x), x \\in D$。

---

## 函数的四大基本性质

| 性质 | 定义 | 判定 |
|------|------|------|
| **单调性** | $x_1 < x_2 \\Rightarrow f(x_1) \\le f(x_2)$ (增) | $f'(x) > 0$ |
| **奇偶性** | $f(-x) = -f(x)$ (奇)；$f(-x) = f(x)$ (偶) | 直接验证 |
| **周期性** | $f(x+T) = f(x)$，$T>0$ 为周期 | 最小正周期 |
| **有界性** | $|f(x)| \\le M$ 对所有 $x \\in D$ | 闭区间连续函数必有界 |

---

## 基本初等函数（六类）

1. **常函数**：$y = C$
2. **幂函数**：$y = x^{\\alpha}$
3. **指数函数**：$y = a^x$ ($a>0, a \\neq 1$)
4. **对数函数**：$y = \\log_a x$ ($a>0, a \\neq 1$)
5. **三角函数**：$\\sin x, \\cos x, \\tan x, \\cot x, \\sec x, \\csc x$
6. **反三角函数**：$\\arcsin x, \\arccos x, \\arctan x$

> 初等函数 = 基本初等函数经过**有限次四则运算与复合**得到的函数。

---

## 考试辨析
- 定义域相同、对应法则相同 → 两函数相同
- 奇函数 $+$ 奇函数 = 奇函数；偶函数 $+$ 偶函数 = 偶函数
- $\\sin x$ 周期 $2\\pi$，定义域 $\\mathbb{R}$，值域 $[-1,1]$`,
  },

  {
    id: 'ma-1-2-1', chapterId: 'ma-1',
    title: '数列极限的定义与性质',
    keyConcepts: ['数列极限', '收敛', '发散', '唯一性', '有界性', '保号性', '迫敛性'],
    relatedPoints: ['ma-1-3-1'],
    content: `## 数列极限的定义（$\\varepsilon$-$N$ 语言）

> $\\lim_{n \\to \\infty} x_n = A \\iff \\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}, \\text{当 } n > N \\text{时}, |x_n - A| < \\varepsilon$

---

## 收敛数列的性质

| 性质 | 内容 |
|------|------|
| **唯一性** | 若数列收敛，则极限唯一 |
| **有界性** | 收敛数列必有界（逆不真） |
| **保号性** | $\\lim x_n = A > 0 \\Rightarrow \\exists N, n>N$ 时 $x_n > 0$ |
| **迫敛性** | $y_n \\le x_n \\le z_n$ 且 $\\lim y_n = \\lim z_n = A \\Rightarrow \\lim x_n = A$ |

---

## 重要极限（常考）

$$\\lim_{n \\to \\infty} \\frac{1}{n} = 0$$

$$\\lim_{n \\to \\infty} q^n = 0 \\quad (|q| < 1)$$

$$\\lim_{n \\to \\infty} \\sqrt[n]{a} = 1 \\quad (a > 0)$$

$$\\lim_{n \\to \\infty} \\sqrt[n]{n} = 1$$

---

## 考试辨析
- 单调有界数列必收敛（单调有界定理）
- 有界数列不一定收敛（例如 $(-1)^n$）
- 迫敛性用于处理**夹逼**型极限`,
  },

  {
    id: 'ma-1-3-1', chapterId: 'ma-1',
    title: '函数极限的定义与计算',
    keyConcepts: ['函数极限', '左右极限', '无穷小', '等价无穷小', '重要极限'],
    relatedPoints: ['ma-1-2-1', 'ma-2-4-1'],
    content: `## 函数极限的定义

> $\\lim_{x \\to x_0} f(x) = A \\iff \\forall \\varepsilon > 0, \\exists \\delta > 0, 0<|x-x_0|<\\delta$ 时 $|f(x)-A|<\\varepsilon$

$$\\lim_{x \\to x_0} f(x) = A \\iff \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = A$$

> 极限存在 $\\iff$ 左右极限**存在且相等**。

---

## 两个重要极限

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e \\quad \\text{或} \\quad \\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$$

---

## 等价无穷小替换（$x \\to 0$ 时）

$$\\sin x \\sim x, \\quad \\tan x \\sim x, \\quad \\arcsin x \\sim x$$

$$\\ln(1+x) \\sim x, \\quad e^x - 1 \\sim x$$

$$1 - \\cos x \\sim \\frac{1}{2}x^2$$

$$(1+x)^\\alpha - 1 \\sim \\alpha x$$

---

## 考试辨析
- 等价无穷小替换只能用于**乘除法**，不能用于加减法
- 第一个重要极限：$\\frac{0}{0}$ 型，$x \\to 0$
- 第二个重要极限：$1^\\infty$ 型，$x \\to \\infty$ 或 $x \\to 0$`,
  },

  // 第8章 线性代数
  {
    id: 'ma-8-1-1', chapterId: 'ma-8',
    title: '行列式的概念与计算',
    keyConcepts: ['行列式', '余子式', '代数余子式', '拉普拉斯展开', '范德蒙行列式'],
    relatedPoints: ['ma-8-2-1'],
    content: `## 行列式的定义

> $n$ 阶行列式是一个数，它是取自不同行、不同列的 $n$ 个元素乘积的代数和。

$$D = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}$$

---

## 行列式的性质

| 性质 | 说明 |
|------|------|
| 转置不变 | $|A^T| = |A|$ |
| 交换两行 | 行列式变号 |
| 两行相同 | $|A| = 0$ |
| 某行全为零 | $|A| = 0$ |
| 某行乘以k | 行列式乘以k |
| 某行的k倍加到另一行 | 行列式不变 |

---

## 行列式计算

### 按行（列）展开
$$|A| = \\sum_{j=1}^{n} a_{ij} A_{ij} \\quad (\\text{按第 } i \\text{ 行})$$

其中 $A_{ij} = (-1)^{i+j} M_{ij}$ 为代数余子式。

### 范德蒙行列式
$$\\begin{vmatrix} 1 & 1 & \\cdots & 1 \\\\ x_1 & x_2 & \\cdots & x_n \\\\ x_1^2 & x_2^2 & \\cdots & x_n^2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ x_1^{n-1} & x_2^{n-1} & \\cdots & x_n^{n-1} \\end{vmatrix} = \\prod_{1 \\le i < j \\le n} (x_j - x_i)$$

---

## 考试辨析
- 克莱姆法则：系数行列式 $\\neq 0$ 时方程组有唯一解
- 初等行变换不改变行列式的**非零性**`,
  },

  // 第9章 概率统计
  {
    id: 'ma-9-1-1', chapterId: 'ma-9',
    title: '随机事件与概率',
    keyConcepts: ['样本空间', '事件', '古典概型', '条件概率', '全概率公式', '贝叶斯公式', '独立性'],
    relatedPoints: ['ma-9-2-1'],
    content: `## 概率的定义

> **古典概型**：$P(A) = \\frac{A \\text{包含的基本事件数}}{\\text{基本事件总数}}$
>
> **统计定义**：$P(A) = \\lim_{n \\to \\infty} \\frac{n_A}{n}$（频率的极限）
>
> **公理化定义**（柯尔莫哥洛夫）：
> 1. $0 \\le P(A) \\le 1$
> 2. $P(\\Omega) = 1$
> 3. 互斥事件：$P(A \\cup B) = P(A) + P(B)$

---

## 条件概率与三大公式

| 公式 | 内容 | 用途 |
|------|------|------|
| **条件概率** | $P(B|A) = \\frac{P(AB)}{P(A)}$ | 已知A发生下B的概率 |
| **乘法公式** | $P(AB) = P(A) \\cdot P(B|A)$ | 求交事件概率 |
| **全概率** | $P(B) = \\sum P(A_i) P(B|A_i)$ | 间接求概率 |
| **贝叶斯** | $P(A_i|B) = \\frac{P(A_i)P(B|A_i)}{\\sum P(A_j)P(B|A_j)}$ | **已知结果推原因** |

---

## 事件的独立性

$A$ 与 $B$ 独立 $\\iff P(AB) = P(A)P(B)$

> **注意**：独立 $\\neq$ 互斥！互斥是 $AB = \\emptyset$，独立是概率关系。

---

## 考试辨析
- 全概率公式 = \"化整为零\"（分段求和）
- 贝叶斯公式 = \"由果推因\"（条件概率反求）
- $n$ 重伯努利试验：$P(X=k) = C_n^k p^k (1-p)^{n-k}$`,
  },
];
