
# 游戏疗愈邀请函生成系统 PRD

## 1. 产品概述

一个基于 Web 的邀请函生成系统,通过输入用户信息自动生成个性化的游戏疗愈邀请报告。

## 2. 功能需求

### 2.1 用户输入界面
- 必填字段:
  - 用户姓名
  - 用户问题/烦恼描述
- 界面形式:网页表单

### 2.2 报告生成功能
- 报告结构:
  1. 开场白(个性化问候+引导语)
  2. 五个游戏介绍(每个游戏包含三个部分)
     - A部分:游戏比喻性描述
     - B部分:针对用户具体问题的价值分析
     - C部分:心理学原理说明
  3. 结束语
- 字数要求:≥2500字
- 个性化要求:
  - 内容需围绕用户具体烦恼定制
  - 保持悬念感和吸引力
  - 采用温暖友好的语气

### 2.3 输出格式
- 文本格式
- 分段清晰
- 可复制粘贴

## 3. 技术需求

建议采用以下技术方案:

```javascript:src/config.js
const CONFIG = {
  // API配置
  API_ENDPOINT: '/api/generate',
  
  // 报告模板配置
  TEMPLATE: {
    MIN_WORDS: 2500,
    SECTIONS: ['开场白', '游戏介绍', '结束语'],
    GAMES_COUNT: 5,
    GAME_SECTIONS: ['描述', '价值', '原理']
  }
}
```

```javascript:src/generator.js
class ReportGenerator {
  constructor(userName, userProblem) {
    this.userName = userName;
    this.userProblem = userProblem;
  }

  async generateReport() {
    // 生成报告逻辑
  }
}
```

## 4. 验收标准

1. 用户输入界面完整可用
2. 生成报告符合字数和结构要求
3. 内容针对性强,逻辑通顺
4. 系统响应时间<5秒
5. 界面友好,操作简单

## 5. 后续优化方向

1. 增加更多游戏模板
2. 支持报告格式定制
3. 添加报告导出功能
4. 优化生成算法提高个性化程度
