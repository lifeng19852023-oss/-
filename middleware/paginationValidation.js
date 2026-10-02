function paginationValidation(req, res, next) {

    // 获取分页参数
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
  
    // 校验 page
    if (
      req.query.page !== undefined &&
      (!Number.isInteger(page) || page < 1)
    ) {
      return res.status(400).json({
        code: 400,
        message: 'page 必须是大于等于1的整数'
      });
    }
  
    // 校验 pageSize
    if (
      req.query.pageSize !== undefined &&
      (!Number.isInteger(pageSize) ||
        pageSize < 1 ||
        pageSize > 100)
    ) {
      return res.status(400).json({
        code: 400,
        message: 'pageSize 必须是1到100之间的整数'
      });
    }
  
    // 校验通过
    next();
  }
  
  module.exports = paginationValidation;