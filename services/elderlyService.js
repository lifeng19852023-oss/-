const db = require('../db/mysql');

// 查询老人列表
async function getElderlyList() {
  const [rows] = await db.query(
    'SELECT * FROM elderly ORDER BY id DESC'
  );

  return rows;
}
// 新增老人
async function createElderly(name, gender, age) {
    const [result] = await db.query(
      'INSERT INTO elderly (name, gender, age) VALUES (?, ?, ?)',
      [name, gender, age]
    );
  
    return result;
  }

// 修改老人信息
async function updateElderly(id, name, gender, age) {
    // UPDATE（更新数据库中的数据）
    const [result] = await db.query(
      'UPDATE elderly SET name = ?, gender = ?, age = ? WHERE id = ?',
      [name, gender, age, id]
    );
  
    return result;
  }

  // 删除老人
async function deleteElderly(id) {
    // DELETE（删除数据库中的数据）
    const [result] = await db.query(
      'DELETE FROM elderly WHERE id = ?',
      [id]
    );
  
    return result;
  }
module.exports = {
  getElderlyList,
  createElderly,
  updateElderly,
  deleteElderly
};