const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'elderly_care'
});

db.connect(err => {
  if (err) {
    console.error('MySQL连接失败：', err);
    return;
  }

  console.log('MySQL连接成功');
});

module.exports = db;