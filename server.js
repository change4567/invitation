const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// 模拟API响应
app.post('/api/generate', (req, res) => {
    const { userName, userProblem } = req.body;
    
    // 模拟生成报告
    const report = `亲爱的${userName}：
    
欢迎踏入这场充满惊喜与探索的游戏疗愈之旅！我是你的琦琦，一个专门通过游戏帮助人们消解烦恼、探索内心的游戏疗愈师。针对你提到的${userProblem}，我为你精心挑选并定制了以下几个疗愈游戏...

[这里是示例报告内容]`;

    setTimeout(() => {
        res.json({ report });
    }, 1000); // 模拟网络延迟
});

// 添加根路由
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 