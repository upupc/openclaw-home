---
name: quick-exec-skill
description: |
  用于快捷执行其他 skill 的路由型技能。当用户明确提到某个 skill，或表达“直接用某个 skill 处理”“帮我快速跑一下某个 skill”“按某个 skill 的流程立刻执行”这类诉求时使用。该技能负责快速识别目标 skill、定位对应 SKILL.md、按最小必要上下文加载并立即执行，避免重复解释和无关铺垫。适合 skill 调度、组合调用、快速分发与执行入口统一。
---

# Quick Exec Skill

这个 skill 不直接完成具体业务，而是作为其他 skill 的快速执行入口。

## 适用场景

当用户出现以下意图时使用本 skill：

- 明确点名某个 skill
- 要求“直接执行”“快速调用”“立刻用某个 skill 处理”
- 一个任务已经明显匹配现有 skill，希望减少解释成本，直接进入执行
- 需要串联多个 skill，但希望由一个统一入口负责路由和顺序安排

典型表达：

- “用 `tavily-search` 查一下……”
- “直接跑 `video-download`”
- “帮我快速执行这个 skill”
- “先用 A，再用 B”

## 核心目标

1. 快速识别目标 skill
2. 只读取必要的 `SKILL.md` 或必要引用文件
3. 立即进入执行，不做冗长说明
4. 多个 skill 同时出现时，选最小可行组合并安排顺序

## 执行流程

### 1. 识别目标 skill

优先级如下：

1. 用户明确给出的 skill 名称
2. 用户话术中隐含但高度明确的 skill 名称
3. 若未明确点名，但任务与某个 skill 的描述高度匹配，则选择最贴合的 skill

如果用户一次提到多个 skill：

- 只选择完成任务所需的最小 skill 集合
- 明确执行顺序
- 避免重复加载相近能力的 skill

## 2. 定位 skill

优先检查以下位置：

- 当前工作区 `workspace/skills/`
- 系统级或全局 skill 目录（如存在）

优先使用快速命令定位：

```bash
rg --files /Users/liuyuan/workspace/openclaw-home/workspace/skills | rg '/目标skill目录名/SKILL\.md$'
```

如果只知道关键词，不知道精确目录名，可用：

```bash
rg -n "^name:|^description:" /Users/liuyuan/workspace/openclaw-home/workspace/skills/*/SKILL.md
```

## 3. 读取最小上下文

读取规则：

- 默认只读取目标 skill 的 `SKILL.md`
- 只有当 `SKILL.md` 明确要求查看 `references/`、`scripts/`、`assets/` 时，再读取对应文件
- 不批量加载无关 skill
- 不为了“保险”而预读整个 `skills/` 目录

## 4. 立即执行

执行时遵循以下约束：

- 先用 1 句话说明将调用哪个 skill，以及为什么
- 然后直接按该 skill 的流程执行
- 除非存在阻塞信息缺失，否则不要先输出大段计划
- 如果 skill 已经给出固定命令、脚本或步骤，优先复用，不重新发明流程

## 5. 失败回退

如果目标 skill 不存在、不可读或说明不完整：

1. 简短说明原因
2. 尝试寻找最接近的替代 skill
3. 如果没有合适替代，再退回通用方式直接处理

如果用户点名的 skill 不在本地可用列表中，不要假装已使用该 skill。

## 多 skill 调度规则

当一个任务需要多个 skill 时：

- 先确定主 skill，再补充辅助 skill
- 能串行就不要并行，除非两个子任务天然独立
- 后续 skill 依赖前一个 skill 的结果时，必须按顺序执行
- 避免两个 skill 做重复工作

## 特殊规则

### `tech-research` 默认报告模板

当目标 skill 是 `tech-research` 时，最终报告模板按以下优先级决定：

1. 用户明确指定的模板
2. `site-summarize` 的 `assets/summary-template.md`

默认行为：

- 如果用户没有指定模板，则使用 `site-summarize/assets/summary-template.md` 编写最终报告
- 如果用户明确给了模板、格式、报告结构或指定文件路径，以用户输入为准
- 该规则只影响最终报告的组织方式，不改变 `tech-research` 本身的研究拆题、关键词扩写和资料整理流程

示例：

- “先搜索资料，再提取正文，再做总结”
  对应顺序可以是：`tavily-search` → `tavily-extract` → `summarize`
- “用 `tech-research` 做调研”
  若用户未指定模板，则最终报告默认套用 `site-summarize/assets/summary-template.md`

## 输出风格

使用本 skill 时，输出应保持简洁：

- 只说明当前要调用的 skill
- 只补充必要前提
- 不重复解释 skill 的背景知识
- 以执行结果为主，不以流程介绍为主

## 决策原则

- 优先执行，不优先讲解
- 优先复用已有 skill，不重复造轮子
- 优先最小上下文，不做无关读取
- 优先明确路由，不做模糊尝试

## 快速模板

当你决定启用某个目标 skill 时，先输出一句简短说明，再开始执行：

```text
使用 `目标-skill` 处理这项任务，我先读取该 skill 的说明并直接执行。
```

如果需要多个 skill：

```text
这项任务会按 `skill-A` -> `skill-B` 的顺序执行，我先加载第一个 skill 的说明并开始处理。
```
