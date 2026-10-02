const express = require('express');

const app = express();

app.use(express.json());

const elderlyRouter = require('./routes/elderly');

app.use('/api', elderlyRouter);

// Error Handler（错误处理器）
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});