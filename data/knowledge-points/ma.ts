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
  {
    id: 'ma-2-3-1', chapterId: 'ma-2', title: '微分中值定理',
    keyConcepts: ['罗尔定理', '拉格朗日中值定理', '柯西中值定理'], relatedPoints: ['ma-2-1-1'],
    content: `## 三大中值定理

### 罗尔定理
$f(x)$ 在 $[a,b]$ 连续，$(a,b)$ 可导，$f(a)=f(b)$
则 $\\exists \\xi \\in (a,b), f'(\\xi) = 0$

### 拉格朗日中值定理（最重要）
$f(x)$ 在 $[a,b]$ 连续，$(a,b)$ 可导
则 $\\exists \\xi \\in (a,b), f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$
> 几何意义：至少存在一点切线平行于弦

### 柯西中值定理
$f,g$ 在 $[a,b]$ 连续，$(a,b)$ 可导，$g'(x) \\neq 0$
则 $\\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(\\xi)}{g'(\\xi)}$

---

## 推论
- $f'(x) \\equiv 0 \\Rightarrow f(x) = C$ (常数)
- $f'(x) > 0 \\Rightarrow f$ 严格单调增

## 考试辨析
- 拉格朗日定理最核心——罗尔是其特例
- 常用于证明不等式（构造辅助函数法）`,
  },
  {
    id: 'ma-2-4-1', chapterId: 'ma-2', title: '洛必达法则',
    keyConcepts: ['洛必达法则', '0/0型', '无穷/无穷型'], relatedPoints: ['ma-2-3-1', 'ma-1-3-1'],
    content: `## 洛必达法则

若 $\\lim f(x) = \\lim g(x) = 0$ (或 $\\infty$)，且 $\\lim \\frac{f'(x)}{g'(x)}$ 存在，则

$$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$$

---

## 适用条件
1. $\\frac{0}{0}$ 型或 $\\frac{\\infty}{\\infty}$ 型
2. $f(x), g(x)$ 在去心邻域内可导且 $g'(x) \\neq 0$
3. $\\lim \\frac{f'(x)}{g'(x)}$ 存在（或为 $\\infty$）

---

## 其他不定式转化
$0 \\cdot \\infty$: $f \\cdot g = \\frac{f}{1/g}$
$\\infty - \\infty$: 通分或有理化
$0^0, \\infty^0, 1^\\infty$: 取对数 $y = e^{\\ln y}$

---

## 考试辨析
- 使用前先验证条件——不是所有极限都能用洛必达
- 可多次使用（每次都要验证条件）
- 常结合等价无穷小替换使用`,
  },
  {
    id: 'ma-2-5-1', chapterId: 'ma-2', title: '泰勒公式',
    keyConcepts: ['泰勒公式', '麦克劳林公式', '拉格朗日余项', '皮亚诺余项'], relatedPoints: ['ma-2-3-1'],
    content: `## 泰勒公式

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n$$

---

## 常见麦克劳林展开式（必背）

$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$

$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$

$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$

$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$

$(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots$

---

## 余项
- **皮亚诺余项**: $R_n = o((x-x_0)^n)$（定性，求极限用）
- **拉格朗日余项**: $R_n = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$（定量，估计误差）

---

## 考试辨析
- 泰勒公式 = 用多项式近似函数
- 皮亚诺余项用于求极限 → 拉格朗日余项用于证明题`,
  },
  {
    id: 'ma-3-3-1', chapterId: 'ma-3', title: '定积分的概念与牛顿-莱布尼茨公式',
    keyConcepts: ['定积分', '黎曼和', '牛顿-莱布尼茨公式'], relatedPoints: ['ma-3-1-1', 'ma-3-2-1'],
    content: `## 定积分的定义

$$\\int_a^b f(x)dx = \\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i) \\Delta x_i$$

其中 $\\lambda = \\max\\{\\Delta x_i\\}$，分割无限细化。

---

## 定积分的性质

$\\int_a^b [f(x) \\pm g(x)]dx = \\int_a^b f(x)dx \\pm \\int_a^b g(x)dx$

$\\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx$（区间可加性）

---

## 牛顿-莱布尼茨公式（核心）

若 $F'(x) = f(x)$，则

$$\\int_a^b f(x)dx = F(b) - F(a) = F(x)\\big|_a^b$$

> 将定积分计算转化为求原函数——揭示了微分与积分的互逆关系！

---

## 积分上限函数

$\\Phi(x) = \\int_a^x f(t)dt$ 满足 $\\Phi'(x) = f(x)$

---

## 考试辨析
- 被积函数 $f$ 只需可积（不一定连续）
- 连续函数必有原函数
- 牛顿-莱布尼茨公式 = 积分学核心定理`,
  },
  {
    id: 'ma-6-1-1', chapterId: 'ma-6', title: '一阶微分方程',
    keyConcepts: ['微分方程', '可分离变量', '一阶线性', '齐次方程'], relatedPoints: ['ma-2-2-1', 'ma-3-1-1'],
    content: `## 基本概念

- **微分方程**：含未知函数及其导数的方程
- **阶**：方程中最高阶导数的阶数
- **通解**：含任意常数的解（常数个数 = 阶数）
- **特解**：满足初始条件的解

---

## 一阶微分方程的三种解法

### 可分离变量

$\\frac{dy}{dx} = f(x)g(y) \\Rightarrow \\int \\frac{dy}{g(y)} = \\int f(x)dx$

### 一阶线性

$y' + P(x)y = Q(x)$

通解公式：

$$y = e^{-\\int P dx}\\left[\\int Q e^{\\int P dx}dx + C\\right]$$

### 齐次方程

$y' = f(\\frac{y}{x})$，令 $u = \\frac{y}{x}$，则 $y = ux, y' = u + xu'$

---

## 考试辨析
- 识别方程类型是解题第一步
- 一阶线性通解公式要背熟
- **别忘了 $+C$**`,
  },
  {
    id: 'ma-8-2-1', chapterId: 'ma-8', title: '矩阵及其运算',
    keyConcepts: ['矩阵', '矩阵乘法', '转置', '逆矩阵', '伴随矩阵', '秩'], relatedPoints: ['ma-8-1-1'],
    content: `## 矩阵的基本运算

$A+B$: 对应元素相加

$kA$: 每个元素乘以 $k$

$AB$: 左行右列，$(AB)_{ij} = \\sum a_{ik}b_{kj}$

$A^T$: 行列互换

---

## 运算律（注意陷阱）

$AB \\neq BA$（矩阵乘法**不满足交换律**）

$(AB)^T = B^T A^T$

$AB = 0 \\nRightarrow A=0$ 或 $B=0$

---

## 逆矩阵

$A^{-1}A = AA^{-1} = E$

$A$ 可逆 $\\iff |A| \\neq 0$

$$A^{-1} = \\frac{1}{|A|} A^*$$

其中 $A^*$ 为伴随矩阵（代数余子式的转置）。

---

## 考试辨析
- $(AB)^{-1} = B^{-1}A^{-1}$（注意顺序反转！）
- 对角矩阵的逆 = 对角元素取倒数
- $|A^{-1}| = 1/|A|$`,
  },
  {
    id: 'ma-8-3-1', chapterId: 'ma-8', title: '线性方程组',
    keyConcepts: ['线性方程组', '高斯消元', '秩', '基础解系', '齐次', '非齐次', '克莱姆法则'], relatedPoints: ['ma-8-2-1', 'ma-8-1-1'],
    content: `## 齐次线性方程组 $Ax = 0$

- 必有零解
- $r(A) < n$ 时有非零解（无穷多解）
- 基础解系含 $n - r(A)$ 个线性无关的解向量

---

## 非齐次线性方程组 $Ax = b$

| 条件 | 解的个数 |
|------|---------|
| $r(A) < r(A|b)$ | **无解** |
| $r(A) = r(A|b) = n$ | **唯一解** |
| $r(A) = r(A|b) < n$ | **无穷多解** |

通解 = 特解 + 齐次通解

---

## 克莱姆法则

若 $|A| \\neq 0$，则 $x_i = \\frac{|A_i|}{|A|}$

其中 $A_i$ 为 $A$ 的第 $i$ 列替换为 $b$ 所得的矩阵。

---

## 考试辨析
- **秩是解方程组的关键**——先求秩再判断
- 基础解系 = $n-r$ 个线性无关解
- 求通解 = 特解 + 齐次通解`,
  },
  {
    id: 'ma-8-4-1', chapterId: 'ma-8', title: '特征值与特征向量',
    keyConcepts: ['特征值', '特征向量', '特征多项式', '相似对角化', '正交对角化', '实对称矩阵'], relatedPoints: ['ma-8-2-1', 'ma-8-1-1'],
    content: `## 定义

$Ax = \\lambda x$，$x \\neq 0$

$\\lambda$ 为特征值，$x$ 为对应的特征向量。

---

## 求法

1. 解特征方程 $|A - \\lambda E| = 0$，得特征值 $\\lambda_1, \\lambda_2, \\ldots$
2. 对每个 $\\lambda_i$，解 $(A - \\lambda_i E)x = 0$，得特征向量

---

## 特征值的性质

$\\sum \\lambda_i = tr(A)$（迹 = 主对角线元素之和）

$\\prod \\lambda_i = |A|$

---

## 相似对角化

$A$ 可对角化 $\\iff$ 存在 $n$ 个线性无关的特征向量

若特征值互异 → 必可对角化

$$P^{-1}AP = \\Lambda = \\begin{pmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{pmatrix}$$

---

## 实对称矩阵的特殊性

实对称矩阵必可**正交**对角化：
$Q^TAQ = \\Lambda$，其中 $Q$ 为正交矩阵 ($Q^T = Q^{-1}$)

---

## 考试辨析
- 特征值的重数 $\\ge$ 特征向量的个数
- 实对称矩阵不同特征值对应的特征向量必正交`,
  },
  {
    id: 'ma-9-2-1', chapterId: 'ma-9', title: '随机变量及其分布',
    keyConcepts: ['随机变量', '分布函数', '离散型', '连续型', '二项分布', '泊松分布', '正态分布', '指数分布'], relatedPoints: ['ma-9-1-1'],
    content: `## 分布函数

$F(x) = P(X \\le x)$

$F(x)$ 单调不减、右连续

$\\lim_{x \\to -\\infty}F(x)=0$，$\\lim_{x \\to +\\infty}F(x)=1$

---

## 常见离散分布

| 分布 | 记号 | 期望 | 方差 |
|------|------|------|------|
| 0-1分布 | $B(1,p)$ | $p$ | $p(1-p)$ |
| 二项分布 | $B(n,p)$ | $np$ | $np(1-p)$ |
| 泊松分布 | $P(\\lambda)$ | $\\lambda$ | $\\lambda$ |

---

## 常见连续分布

| 分布 | 密度函数 | 期望 | 方差 |
|------|---------|------|------|
| 均匀分布 $U(a,b)$ | $\\frac{1}{b-a}$ | $\\frac{a+b}{2}$ | $\\frac{(b-a)^2}{12}$ |
| 指数分布 $E(\\lambda)$ | $\\lambda e^{-\\lambda x}$ | $\\frac{1}{\\lambda}$ | $\\frac{1}{\\lambda^2}$ |
| **正态分布** $N(\\mu,\\sigma^2)$ | $\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mu$ | $\\sigma^2$ |

---

## 正态分布（最重要）

标准正态：$Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)$

$P(|X-\\mu| < \\sigma) \\approx 68.3\\%$

$P(|X-\\mu| < 2\\sigma) \\approx 95.4\\%$

$P(|X-\\mu| < 3\\sigma) \\approx 99.7\\%$（**$3\\sigma$ 原则**）

---

## 考试辨析
- 正态分布经线性变换仍为正态分布
- 独立正态变量的和仍为正态分布
- $F(x) = \\Phi(\\frac{x-\\mu}{\\sigma})$（标准化后查表）`,
  },
  {
    id: 'ma-9-4-1', chapterId: 'ma-9', title: '数字特征（期望/方差/协方差）',
    keyConcepts: ['期望', '方差', '标准差', '协方差', '相关系数'], relatedPoints: ['ma-9-2-1'],
    content: `## 期望

离散：$E(X) = \\sum x_i p_i$

连续：$E(X) = \\int_{-\\infty}^{\\infty} x f(x) dx$

**线性性**：$E(aX+bY) = aE(X) + bE(Y)$

---

## 方差

$D(X) = E[(X-E(X))^2] = E(X^2) - [E(X)]^2$

$D(aX+b) = a^2 D(X)$

---

## 协方差与相关系数

$Cov(X,Y) = E(XY) - E(X)E(Y)$

$\\rho_{XY} = \\frac{Cov(X,Y)}{\\sqrt{D(X)D(Y)}}$

$|\\rho| \\le 1$；$\\rho>0$ 正相关；$\\rho<0$ 负相关；$\\rho=0$ 不相关

---

## 方差性质

$D(X \\pm Y) = D(X) + D(Y) \\pm 2Cov(X,Y)$

当 $X,Y$ 独立时：$D(X+Y) = D(X) + D(Y)$

---

## 考试辨析
- **独立 $\\Rightarrow$ 不相关**，但不相关 $\\nRightarrow$ 独立（正态分布例外）
- $E(XY) = E(X)E(Y)$ 当且仅当 $X,Y$ 不相关`,
  },
  {
    id: 'ma-2-6-1', chapterId: 'ma-2', title: '函数的单调性与极值',
    keyConcepts: ['单调性', '极值', '驻点', '临界点', '极值第一充分条件', '极值第二充分条件'], relatedPoints: ['ma-2-5-1'],
    content: `## 单调性判定

$f'(x) > 0$ 在区间 $I$ 上 $\\Rightarrow f(x)$ 在 $I$ 上严格单调递增
$f'(x) < 0 \\Rightarrow$ 严格单调递减
$f'(x) = 0$ 的点称为**驻点**

---

## 极值的充分条件

### 第一充分条件
$f'(x_0)=0$，$x$ 从左到右经过 $x_0$ 时：
$f'(x)$ 由正变负 $\\Rightarrow f(x_0)$ 为极大值
$f'(x)$ 由负变正 $\\Rightarrow f(x_0)$ 为极小值

### 第二充分条件
$f'(x_0)=0$，$f''(x_0) < 0 \\Rightarrow$ 极大值
$f'(x_0)=0$，$f''(x_0) > 0 \\Rightarrow$ 极小值

---

## 闭区间上连续函数的最值
1. 求区间内部的驻点和不可导点
2. 计算这些点及端点的函数值
3. 比较得最大/最小值

---

## 考试辨析
- 驻点 ≠ 极值点（$f'(x_0)=0$ 只是极值的必要条件）
- 极值点处的导数可能不存在（如 $y=|x|$ 在 $x=0$）
- 最大值 ≠ 极大值（极值是局部的，最值是全局的）`,
  },
  {
    id: 'ma-2-7-1', chapterId: 'ma-2', title: '函数的凹凸性与拐点',
    keyConcepts: ['凹凸性', '拐点', '二阶导数', '凸函数', '凹函数'], relatedPoints: ['ma-2-6-1'],
    content: `## 凹凸性判定
$f''(x) > 0 \\Rightarrow$ 曲线**下凸**（凹向上，concave up）
$f''(x) < 0 \\Rightarrow$ 曲线**上凸**（凹向下，concave down）

---

## 拐点
拐点 = 曲线凹凸性发生改变的点

**必要条件**：$f''(x_0)=0$ 或 $f''(x_0)$ 不存在
**充分条件**：$f''(x)$ 在 $x_0$ 两侧变号

---

## 渐近线
| 类型 | 条件 |
|------|------|
| 水平渐近线 | $\\lim_{x\\to\\infty} f(x) = A$ |
| 垂直渐近线 | $\\lim_{x\\to x_0} f(x) = \\infty$ |
| 斜渐近线 | $\\lim_{x\\to\\infty} \\frac{f(x)}{x} = k$, $\\lim_{x\\to\\infty}[f(x)-kx] = b$ |

---

## 考试辨析
- $f''(x_0)=0$ 是拐点的**必要条件**（不是充分条件）
- 拐点处 $f''(x)$ 必须**变号**
- 渐近线是作图题的重要考点`,
  },
  {
    id: 'ma-3-5-1', chapterId: 'ma-3', title: '广义积分（反常积分）',
    keyConcepts: ['广义积分', '无穷区间', '无界函数', '收敛', '发散', '柯西主值'], relatedPoints: ['ma-3-3-1'],
    content: `## 无穷区间上的广义积分

$$\\int_a^\\infty f(x)dx = \\lim_{t\\to\\infty} \\int_a^t f(x)dx$$

若极限存在 $\\Rightarrow$ 收敛；否则发散

---

## 无界函数的广义积分（瑕积分）

$$\\int_a^b f(x)dx = \\lim_{t\\to b^-} \\int_a^t f(x)dx$$

其中 $x=b$ 为 $f(x)$ 的瑕点（$f(x) \\to \\infty$）。

---

## p-积分的收敛性（必记）

$\\int_1^\\infty \\frac{1}{x^p}dx$：$p>1$ 收敛，$p\\le 1$ 发散

$\\int_0^1 \\frac{1}{x^p}dx$：$p<1$ 收敛，$p\\ge 1$ 发散

---

## 考试辨析
- 广义积分 = 普通定积分 + 取极限
- 必须先判断收敛性才能计算
- p-积分的收敛条件是高频考点`,
  },
  {
    id: 'ma-4-1-1', chapterId: 'ma-4', title: '多元函数的基本概念与偏导数',
    keyConcepts: ['多元函数', '偏导数', '全微分', '方向导数', '梯度'], relatedPoints: ['ma-4-2-1'],
    content: `## 偏导数

$z=f(x,y)$ 对 $x$ 的偏导数：$\\frac{\\partial z}{\\partial x} = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x, y) - f(x,y)}{\\Delta x}$

对 $y$ 求偏导时将 $x$ 视为常数。

---

## 全微分

$dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$

**可微的充分条件**：偏导数存在且连续

---

## 方向导数与梯度

方向导数：$\\frac{\\partial f}{\\partial l} = \\nabla f \\cdot \\vec{u}$

梯度：$\\nabla f = (\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y})$，指向函数增长最快的方向

---

## 考试辨析
- 偏导数存在 $\\nRightarrow$ 可微
- 偏导数连续 $\\Rightarrow$ 可微 $\\Rightarrow$ 偏导数存在
- 梯度方向 = 函数增长最快方向`,
  },
  {
    id: 'ma-4-5-1', chapterId: 'ma-4', title: '多元函数的极值与条件极值',
    keyConcepts: ['无条件极值', '条件极值', '拉格朗日乘数法', 'Hessian矩阵'], relatedPoints: ['ma-4-1-1'],
    content: `## 无条件极值

驻点：$\\frac{\\partial f}{\\partial x}=0$ 且 $\\frac{\\partial f}{\\partial y}=0$

Hessian判别法：$A=f_{xx}, B=f_{xy}, C=f_{yy}$

$\\Delta = AC - B^2 > 0$：$A>0$极小，$A<0$极大
$\\Delta < 0$：不是极值点
$\\Delta = 0$：无法判断

---

## 条件极值（拉格朗日乘数法）

求 $f(x,y)$ 在 $g(x,y)=0$ 条件下的极值：

令 $L(x,y,\\lambda) = f(x,y) + \\lambda g(x,y)$

解方程组：$\\frac{\\partial L}{\\partial x}=0, \\frac{\\partial L}{\\partial y}=0, \\frac{\\partial L}{\\partial \\lambda}=0$

---

## 考试辨析
- 拉格朗日乘数法是数学一大题常考内容
- 引入 $\\lambda$ 将条件极值转为无条件极值
- 多个条件时添加多个 $\\lambda$`,
  },
  {
    id: 'ma-5-1-1', chapterId: 'ma-5', title: '二重积分的概念与计算',
    keyConcepts: ['二重积分', '直角坐标', '极坐标', '累次积分', '换序'], relatedPoints: ['ma-3-3-1', 'ma-4-1-1'],
    content: `## 二重积分的定义

$$\\iint_D f(x,y)d\\sigma = \\lim_{\\lambda \\to 0} \\sum f(\\xi_i,\\eta_i)\\Delta\\sigma_i$$

---

## 直角坐标下的计算

### X型区域（先y后x）
$\\iint_D f(x,y)dxdy = \\int_a^b \\left[\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x,y)dy\\right]dx$

### Y型区域（先x后y）
$\\iint_D f(x,y)dxdy = \\int_c^d \\left[\\int_{\\psi_1(y)}^{\\psi_2(y)} f(x,y)dx\\right]dy$

---

## 极坐标下的计算

$x = r\\cos\\theta, y = r\\sin\\theta, dxdy = r dr d\\theta$

适用：积分区域为圆、扇形，或被积函数含 $x^2+y^2$

$$\\iint_D f(x,y)dxdy = \\int_\\alpha^\\beta \\int_{r_1(\\theta)}^{r_2(\\theta)} f(r\\cos\\theta,r\\sin\\theta) r dr d\\theta$$

---

## 考试辨析
- 换序积分 = 交换积分次序（先看区域再重写积分限）
- 极坐标的 $r$ 很容易遗漏（$dxdy = r dr d\\theta$）
- 对称性可简化积分（奇函数积分为0）`,
  },
  {
    id: 'ma-6-2-1', chapterId: 'ma-6', title: '一阶微分方程的解法',
    keyConcepts: ['可分离变量', '一阶线性', '齐次方程', '伯努利方程', '积分因子'], relatedPoints: ['ma-6-1-1'],
    content: `## 可分离变量型

$y' = f(x)g(y) \\Rightarrow \\int \\frac{dy}{g(y)} = \\int f(x)dx$

---

## 一阶线性

$y' + P(x)y = Q(x)$

通解：$y = e^{-\\int Pdx}\\left[\\int Q e^{\\int Pdx}dx + C\\right]$

---

## 齐次方程

$y' = f(\\frac{y}{x})$

令 $u = \\frac{y}{x} \\Rightarrow y = ux, y' = u + xu'$

代入得可分离变量方程

---

## 伯努利方程

$y' + P(x)y = Q(x)y^n$ $(n \\neq 0,1)$

令 $z = y^{1-n}$，化为一阶线性方程

---

## 考试辨析
- 识别方程类型是解题第一步
- 一阶线性通解公式必须背熟
- **别忘了 +C**`,
  },
  {
    id: 'ma-6-3-1', chapterId: 'ma-6', title: '高阶常系数线性微分方程',
    keyConcepts: ['二阶常系数齐次', '特征方程', '非齐次', '待定系数法'], relatedPoints: ['ma-6-2-1'],
    content: `## 二阶常系数齐次线性方程

$y'' + py' + qy = 0$

**特征方程**：$r^2 + pr + q = 0$

| 根的情况 | 通解 |
|----------|------|
| 两不等实根 $r_1,r_2$ | $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$ |
| 两相等实根 $r$ | $y = (C_1 + C_2 x)e^{rx}$ |
| 共轭复根 $\\alpha \\pm i\\beta$ | $y = e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$ |

---

## 非齐次方程（待定系数法）

$y'' + py' + qy = f(x)$

通解 = 齐次通解 + 特解

| $f(x)$ 形式 | 特解形式 |
|------------|---------|
| $P_n(x)$ | $Q_n(x)x^k$ |
| $e^{\\lambda x}P_n(x)$ | $Q_n(x)e^{\\lambda x}x^k$ |
| $A\\sin\\beta x + B\\cos\\beta x$ | $x^k(C\\sin\\beta x + D\\cos\\beta x)$ |

$k$ = $\\lambda$ 是特征根的重数（0/1/2）

---

## 考试辨析
- 特征方程法只适用于**常系数**方程
- 待定系数法中 $x^k$ 的指数 $k$ 取决于 $\\lambda$ 与特征根的关系`,
  },
  {
    id: 'ma-7-2-1', chapterId: 'ma-7', title: '正项级数的审敛法',
    keyConcepts: ['正项级数', '比较审敛', '比值审敛', '根值审敛', 'p级数'], relatedPoints: ['ma-7-1-1'],
    content: `## 正项级数审敛法

正项级数：$a_n \\ge 0$，$\\sum a_n$

---

## 比较审敛法

若 $a_n \\le b_n$，且 $\\sum b_n$ 收敛 $\\Rightarrow \\sum a_n$ 收敛
若 $a_n \\ge b_n$，且 $\\sum b_n$ 发散 $\\Rightarrow \\sum a_n$ 发散

**极限形式**：$\\lim \\frac{a_n}{b_n} = L$（$0<L<\\infty$）$\\Rightarrow$ 同敛散

---

## 比值审敛法（达朗贝尔判别法）

$\\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\rho$

$\\rho < 1$：收敛；$\\rho > 1$：发散；$\\rho = 1$：无法判定

---

## 根值审敛法（柯西判别法）

$\\lim_{n\\to\\infty} \\sqrt[n]{|a_n|} = \\rho$

判定条件同比值法

---

## 常用参考级数
- **几何级数**：$\\sum aq^n$，$|q|<1$ 收敛
- **p-级数**：$\\sum \\frac{1}{n^p}$，$p>1$ 收敛
- $\\sum \\frac{1}{n}$ 发散（调和级数）

---

## 考试辨析
- 比值/根值=1时无法判定——需换用比较法
- $\\sum \\frac{1}{n}$ 发散但 $\\sum \\frac{1}{n^{1.0001}}$ 收敛`,
  },
  {
    id: 'ma-8-5-1', chapterId: 'ma-8', title: '二次型',
    keyConcepts: ['二次型', '正定', '负定', '惯性指数', '合同', '配方法', '正交变换'], relatedPoints: ['ma-8-4-1'],
    content: `## 二次型的定义

$f(x_1,x_2,\\cdots,x_n) = \\sum a_{ij}x_i x_j = x^T A x$

其中 $A$ 为实对称矩阵

---

## 二次型的标准化

### 正交变换法
$A$ 实对称 $\\Rightarrow$ 存在正交矩阵 $Q$ 使 $Q^T A Q = \\Lambda$

$f = x^T A x = y^T \\Lambda y = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots$

### 配方法
逐步配方，化为平方和

---

## 惯性定理

任意实二次型经可逆线性变换化为标准形后：
**正惯性指数 $p$** 和 **负惯性指数 $q$** 不变
$p+q = r(A)$

---

## 正定二次型

$f$ 正定 $\\iff$ 所有特征值 $>0$
$\\iff$ 各阶顺序主子式 $>0$

---

## 考试辨析
- 正交变换 $\\neq$ 相似变换——正交变换保持度量不变
- 标准形不唯一；规范形唯一（系数为±1或0）
- 正定 = 所有特征值 > 0`,
  },
  {
    id: 'ma-9-3-1', chapterId: 'ma-9', title: '多维随机变量',
    keyConcepts: ['联合分布', '边缘分布', '条件分布', '独立性', '卷积公式'], relatedPoints: ['ma-9-2-1'],
    content: `## 联合分布与边缘分布

联合分布函数：$F(x,y) = P(X \\le x, Y \\le y)$

边缘分布：$F_X(x) = F(x,+\\infty)$，$F_Y(y) = F(+\\infty, y)$

---

## 独立性

$X$ 与 $Y$ 独立 $\\iff F(x,y) = F_X(x) \\cdot F_Y(y)$

连续情况：$f(x,y) = f_X(x) \\cdot f_Y(y)$

---

## 二维连续分布

边缘密度：$f_X(x) = \\int_{-\\infty}^{\\infty} f(x,y)dy$

条件密度：$f_{X|Y}(x|y) = \\frac{f(x,y)}{f_Y(y)}$

---

## 独立变量和的分布（卷积公式）

$Z = X + Y$，$X,Y$ 独立：

$f_Z(z) = \\int_{-\\infty}^{\\infty} f_X(x) f_Y(z-x) dx$

---

## 考试辨析
- 边缘分布由联合分布唯一确定（反过来不行）
- 独立 $\\iff$ 联合 = 边缘乘积
- 卷积公式用于求独立变量和的分布`,
  },
  {
    id: 'ma-9-5-1', chapterId: 'ma-9', title: '大数定律与中心极限定理',
    keyConcepts: ['切比雪夫不等式', '大数定律', '中心极限定理', '独立同分布'], relatedPoints: ['ma-9-4-1'],
    content: `## 切比雪夫不等式

$P(|X - EX| \\ge \\varepsilon) \\le \\frac{DX}{\\varepsilon^2}$

对任意分布成立，给出了"大概率落在期望附近"的定量描述。

---

## 大数定律

独立同分布，$EX = \\mu, DX = \\sigma^2$，则：

$\\frac{1}{n}\\sum X_i \\xrightarrow{P} \\mu$（样本均值收敛到总体均值）

**辛钦大数定律**：$EX$ 存在即成立（不用方差存在）

---

## 中心极限定理

独立同分布，$EX = \\mu, DX = \\sigma^2$，$n$ 足够大时：

$$\\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\sim N(0,1)$$

> 无论 $X_i$ 服从什么分布，均值近似正态分布

---

## 拉普拉斯中心极限定理

$X \\sim B(n,p)$，$n$ 足够大时：

$X \\stackrel{approx}{\\sim} N(np, np(1-p))$

---

## 考试辨析
- 大数定律 = 样本均值稳定在期望附近
- 中心极限定理 = 大量独立随机变量之和近似正态
- 拉普拉斯定理是中心极限定理的二项分布特例`,
  },
];
