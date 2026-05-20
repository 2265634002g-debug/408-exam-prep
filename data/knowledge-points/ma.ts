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
  {
    id: 'ma-1-4-1', chapterId: 'ma-1', title: '无穷小与无穷大的比较',
    keyConcepts: ['无穷小', '无穷大', '高阶', '低阶', '同阶', '等价', '阶数'], relatedPoints: ['ma-1-3-1'],
    content: `## 无穷小的比较
设 $\\lim f(x) = \\lim g(x) = 0$，$g(x) \\neq 0$：
| 关系 | 定义 | 记号 |
|------|------|------|
| 高阶无穷小 | $\\lim \\frac{f}{g} = 0$ | $f = o(g)$ |
| 低阶无穷小 | $\\lim \\frac{f}{g} = \\infty$ | — |
| 同阶无穷小 | $\\lim \\frac{f}{g} = C \\neq 0$ | $f = O(g)$ |
| **等价无穷小** | $\\lim \\frac{f}{g} = 1$ | $f \\sim g$ |

---
## k 阶无穷小
若 $\\lim \\frac{f(x)}{x^k} = C \\neq 0$，则称 $f(x)$ 为 $x$ 的 $k$ 阶无穷小。

---
## 考试辨析
- 等价无穷小替换只能用于**乘除法**，不能用于加减法
- 判断无穷小的阶数是极限计算的基础`,
  },
  {
    id: 'ma-1-5-1', chapterId: 'ma-1', title: '极限的运算法则与存在准则',
    keyConcepts: ['极限四则运算', '复合函数极限', '夹逼准则', '单调有界准则'], relatedPoints: ['ma-1-3-1', 'ma-1-2-1'],
    content: `## 极限的四则运算法则
若 $\\lim f(x) = A, \\lim g(x) = B$，则：
- $\\lim[f(x) \\pm g(x)] = A \\pm B$
- $\\lim[f(x) \\cdot g(x)] = A \\cdot B$
- $\\lim\\frac{f(x)}{g(x)} = \\frac{A}{B} \\ (B \\neq 0)$
- $\\lim[f(x)]^n = A^n$

---
## 复合函数极限
若 $\\lim_{x \\to x_0} g(x) = u_0$ 且 $\\lim_{u \\to u_0} f(u) = A$，在 $x_0$ 某去心邻域内 $g(x) \\neq u_0$，则
$$\\lim_{x \\to x_0} f[g(x)] = A$$

---
## 极限存在的两个准则
### 夹逼准则
若 $g(x) \\le f(x) \\le h(x)$，且 $\\lim g = \\lim h = A$，则 $\\lim f = A$
### 单调有界准则
单调增加（减少）且有上界（下界）的数列必收敛。

---
## 考试辨析
- 极限运算法则的前提是**各部分极限存在**
- 夹逼准则常用于 $x \\to 0$ 时 $\\sin x / x \\to 1$ 的证明`,
  },
  {
    id: 'ma-1-6-1', chapterId: 'ma-1', title: '函数的连续性与间断点',
    keyConcepts: ['连续', '左连续', '右连续', '间断点', '第一类', '第二类', '可去', '跳跃', '无穷', '振荡'], relatedPoints: ['ma-1-3-1'],
    content: `## 连续的定义
$f(x)$ 在 $x_0$ 处连续 $\\iff \\lim_{x \\to x_0} f(x) = f(x_0)$
等价于：$\\lim_{\\Delta x \\to 0} \\Delta y = 0$
左连续 $+$ 右连续 = 连续

---
## 间断点的分类
| 类型 | 子类 | 条件 |
|------|------|------|
| 第一类 | **可去** | 左右极限存在且相等 $\\neq f(x_0)$ |
| 第一类 | **跳跃** | 左右极限存在但不相等 |
| 第二类 | **无穷** | 至少一侧极限为 $\\infty$ |
| 第二类 | **振荡** | 极限不存在（非$\\infty$） |

---
## 闭区间上连续函数的性质
1. **最值定理**：闭区间上连续函数必有最大值和最小值
2. **介值定理**：能取到任意两个函数值之间的所有值
3. **零点定理**：$f(a)f(b) < 0 \\Rightarrow \\exists \\xi \\in (a,b), f(\\xi)=0$

---
## 考试辨析
- 初等函数在其定义域内连续
- 间断点分类 = 看**左右极限是否存在**`,
  },
  {
    id: 'ma-2-1-1', chapterId: 'ma-2', title: '导数的概念与几何意义',
    keyConcepts: ['导数', '左导数', '右导数', '切线斜率', '可导', '可导必连续'], relatedPoints: ['ma-1-3-1'],
    content: `## 导数的定义
$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0+\\Delta x) - f(x_0)}{\\Delta x} = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$$

---
## 几何意义
$f'(x_0)$ = 曲线 $y=f(x)$ 在点 $(x_0, f(x_0))$ 处的**切线斜率**
切线方程：$y - f(x_0) = f'(x_0)(x - x_0)$
法线方程：$y - f(x_0) = -\\frac{1}{f'(x_0)}(x - x_0)$

---
## 可导与连续的关系
> **可导 $\\Rightarrow$ 连续**，但连续 $\\nRightarrow$ 可导
例：$y=|x|$ 在 $x=0$ 连续但不可导（左右导数不相等）

---
## 考试辨析
- 可导 $\\iff$ 左导数 = 右导数
- 分段函数分段点处必须用**定义**求导`,
  },
  {
    id: 'ma-2-2-1', chapterId: 'ma-2', title: '求导法则与高阶导数',
    keyConcepts: ['四则求导', '复合求导', '隐函数', '参数方程', '高阶导数', '莱布尼茨公式'], relatedPoints: ['ma-2-1-1'],
    content: `## 基本求导公式
$(C)'=0, (x^n)'=nx^{n-1}, (\\sin x)'=\\cos x, (\\cos x)'=-\\sin x$
$(e^x)'=e^x, (\\ln x)'=\\frac{1}{x}, (a^x)'=a^x\\ln a$
$(\\tan x)'=\\sec^2 x, (\\cot x)'=-\\csc^2 x$
$(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}}, (\\arctan x)'=\\frac{1}{1+x^2}$

---
## 四则运算法则
$(u \\pm v)' = u' \\pm v'$
$(uv)' = u'v + uv'$
$(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$

---
## 链式法则（复合函数求导）
$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

---
## 高阶导数
$f^{(n)}(x) = [f^{(n-1)}(x)]'$
莱布尼茨公式（乘积的n阶导数）：
$$(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(n-k)} v^{(k)}$$

## 常见高阶导数公式
$(e^x)^{(n)} = e^x$
$(\\sin x)^{(n)} = \\sin(x+\\frac{n\\pi}{2})$
$(x^n)^{(n)} = n!$`,
  },
  {
    id: 'ma-3-1-1', chapterId: 'ma-3', title: '不定积分的概念与基本公式',
    keyConcepts: ['原函数', '不定积分', '基本积分表', '线性性质'], relatedPoints: ['ma-3-2-1'],
    content: `## 定义
若 $F'(x) = f(x)$，则 $F(x)$ 为 $f(x)$ 的**原函数**。
$f(x)$ 的全体原函数称为**不定积分**：$\\int f(x)dx = F(x) + C$

---
## 基本积分表（必背）
$\\int k dx = kx + C$
$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\ (n \\neq -1)$
$\\int \\frac{1}{x} dx = \\ln|x| + C$
$\\int e^x dx = e^x + C$
$\\int \\sin x dx = -\\cos x + C$
$\\int \\cos x dx = \\sin x + C$
$\\int \\sec^2 x dx = \\tan x + C$
$\\int \\frac{1}{1+x^2} dx = \\arctan x + C$
$\\int \\frac{1}{\\sqrt{1-x^2}} dx = \\arcsin x + C$

---
## 线性性质
$\\int[kf(x) \\pm lg(x)]dx = k\\int f(x)dx \\pm l\\int g(x)dx$

## 考试辨析
- 积分与求导互为逆运算
- 别忘了$+C$——不定积分表示一族函数！`,
  },
  {
    id: 'ma-3-2-1', chapterId: 'ma-3', title: '不定积分的计算（换元法与分部积分法）',
    keyConcepts: ['第一类换元', '第二类换元', '分部积分', '凑微分', '三角换元'], relatedPoints: ['ma-3-1-1'],
    content: `## 第一类换元法（凑微分法）
$$\\int f[\\varphi(x)]\\varphi'(x)dx = \\int f(u)du = F[\\varphi(x)] + C$$
> 核心技巧：将被积表达式的一部分"塞入"微分号内。

### 常见凑微分模式
$x dx = \\frac{1}{2}d(x^2)$, $\\frac{1}{x}dx = d(\\ln x)$
$e^x dx = d(e^x)$, $\\sin x dx = -d(\\cos x)$
$\\frac{1}{1+x^2}dx = d(\\arctan x)$

---
## 第二类换元法（三角换元）
| 被积函数含 | 换元 | $dx$ |
|-----------|------|------|
| $\\sqrt{a^2-x^2}$ | $x=a\\sin t$ | $dx=a\\cos t dt$ |
| $\\sqrt{a^2+x^2}$ | $x=a\\tan t$ | $dx=a\\sec^2 t dt$ |
| $\\sqrt{x^2-a^2}$ | $x=a\\sec t$ | $dx=a\\sec t\\tan t dt$ |

---
## 分部积分法
$$\\int u dv = uv - \\int v du$$
口诀：**反对幂指三**（优先级越靠后越优先做$u$）
反三角函数 > 对数 > 幂函数 > 指数 > 三角`,
  },
];
