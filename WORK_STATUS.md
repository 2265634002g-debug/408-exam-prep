# 408 考研刷题系统 — 工作状态存档

**存档时间**: 2026-05-20 凌晨

---

## 在线地址
https://2265634002g-debug.github.io/408-exam-prep/

## 仓库地址
https://github.com/2265634002g-debug/408-exam-prep

---

## 项目目标
构建一个帮助考生系统化复习 408 计算机考研的 Web 应用，覆盖四科全部知识点，支持：
- 知识点浏览（Markdown + KaTeX 数学公式）
- 章节思维导图（待做）
- 全局知识图谱（待做）
- 刷题（待建题库）
- 错题本（已有空框架）

## 技术栈
React 19 + TypeScript + Vite 8 + React Router v7 + react-markdown + KaTeX
部署：GitHub Pages（GitHub Actions 自动构建）

## 数据架构
```
data/
├── subjects.ts                    # 四科章节结构（完整）
├── knowledge-points/
│   ├── index.ts                   # 汇总 + 搜索
│   ├── ds.ts  (84 KPs) ✅
│   ├── co.ts  (32 KPs) ✅
│   ├── os.ts  (17 KPs) ✅
│   └── cn.ts  (21 KPs) ✅
└── questions/                     # 题库（仅空壳）
```

## 知识点完成情况

### DS 数据结构 (84 知识点) ✅
已全部完成，内容相对详尽。从第2章开始使用 Python 脚本生成，格式统一。

### CO 计算机组成原理 (32 知识点) ✅
内容过于简略——每个知识点只有要点罗列，缺少详细的考点分析和真题示例。

### OS 操作系统 (17 知识点) ✅
同样简略，特别是 PV 操作、死锁、虚拟内存等核心章节需要大幅扩充。

### CN 计算机网络 (21 知识点) ✅
部分小节完全缺失：组帧(cn-3-2)、广域网(cn-3-7)、IPv6(cn-4-3)、IP多播(cn-4-5)、移动IP(cn-4-6)、FTP(cn-6-3)、电子邮件(cn-6-4)。

## 待做工作（按优先级）

### P0 - 知识点丰富化（进行中）
- [ ] CO 知识点大幅扩充，增加详细的考点分析
- [ ] OS 知识点大幅扩充，特别是 PV操作/死锁/虚拟内存
- [ ] CN 知识点大幅扩充 + 补全缺失的小节

### P1 - 可视化
- [ ] 章节思维导图组件（Mind Map）
- [ ] 全局知识图谱组件（Knowledge Graph）
- [ ] D3.js 或其他可视化库的选型与集成

### P2 - 题库
- [ ] 选择题题库
- [ ] 大题题库
- [ ] 按知识点分类

### P3 - 增强
- [ ] 知识点详情页增强（相关知识点推荐、上下导航）

## 关键注意事项
- 知识点必须交叉验证确保正确性（王道考研 + 历年真题 + 网络搜索）
- 内容格式：Markdown + KaTeX + 表格 + 代码块 + 考试辨析
- 使用 Python 脚本生成 TypeScript 文件（处理反引号转义）
- 编译验证：`npx tsc -b --noEmit`

## Git 设置
- 代理：`git config --global http.proxy http://127.0.0.1:7897`
- 用户：`git config user.name "2265634002g-debug"`
- 远程：`https://github.com/2265634002g-debug/408-exam-prep.git`
- 推送后 GitHub Actions 自动部署到 Pages

## 历史重要错误（见 memory/error-log.md）
1. TypeScript 模板字符串内反引号必须转义为 \`
2. 扫描版 PDF 无法直接提取文字，改用知识储备 + WebSearch 验证
3. bash heredoc 中不宜嵌入含反引号和 $ 的 Python 代码——写到独立 .py 文件再执行
