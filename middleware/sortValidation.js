function sortValidation(req, res, next) {

    // 获取排序参数
    const sort = req.query.sort || 'id_desc';
  
    // 允许的排序方式
    const sortMap = {
      id_desc: 'id DESC',
      id_asc: 'id ASC',
      age_desc: 'age DESC',
      age_asc: 'age ASC',
      name_asc: 'name ASC',
      name_desc: 'name DESC'
    };
  
    // 判断排序方式是否合法
    if (!sortMap[sort]) {
      return res.status(400).json({
        code: 400,
        message: 'sort 参数不合法'
      });
    }
  
    // 把安全的 SQL 排序语句保存下来
    req.sortOrder = sortMap[sort];
  
    next();
  }
  
  module.exports = sortValidation;