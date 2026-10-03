const express = require('express');
const cors = require('cors');

const app = express();

// 1. 全局中间件
app.use(cors());           // 解决跨域（其实有了 Vite 代理可以不写，但写上无害）
app.use(express.json());   // 解析 JSON 请求体

// 2. 引入路由和错误处理器
const elderlyRouter = require('./routes/elderly');
const authRouter = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

// 3. 分别注册路由
// 访问 /api/elderly/statistics 就会交给 elderlyRouter 处理
app.use('/api', elderlyRouter); 

// 访问 /api/auth/login 就会交给 authRouter 处理
app.use('/api/auth', authRouter);

// 4. 错误处理器必须放在所有路由的最后！
app.use(errorHandler);

app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});