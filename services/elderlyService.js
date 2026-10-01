const db = require('../db/mysql');

function getElderlyList(callback) {
  db.query(
    'SELECT * FROM elderly',
    (err, results) => {
      callback(err, results);
    }
  );
}

function createElderly(data, callback) {
    const { name, gender, age } = data;
  
    db.query(
      'INSERT INTO elderly (name, gender, age) VALUES (?, ?, ?)',
      [name, gender, age],
      (err, result) => {
        callback(err, result);
      }
    );
  }

  function updateElderly(id, data, callback) {
    const { name, gender, age } = data;
  
    db.query(
      'UPDATE elderly SET name = ?, gender = ?, age = ? WHERE id = ?',
      [name, gender, age, id],
      (err, result) => {
        callback(err, result);
      }
    );
  }
  
  function deleteElderly(id, callback) {
    db.query(
      'DELETE FROM elderly WHERE id = ?',
      [id],
      (err, result) => {
        callback(err, result);
      }
    );
  }

module.exports = {
  getElderlyList,
  createElderly,
  updateElderly,
  deleteElderly
};