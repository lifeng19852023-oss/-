const express = require('express');
const elderlyRouter = require('./routes/elderly');

const app = express();

app.use(express.json());

app.use('/api', elderlyRouter);

app.get('/', (req, res) => {
  res.json({
    code: 200,
    message: '养老机构管理系统'
  });
});

app.listen(3000, () => {
  console.log('Express服务器启动：http://localhost:3000');
});