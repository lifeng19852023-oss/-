function ageValidation(req, res, next) {

    // 获取原始参数
    const { minAge, maxAge } = req.query;
  
    // =========================
    // 校验 minAge
    // =========================
  
    if (minAge !== undefined) {
  
      const age = Number(minAge);
  
      if (
        !Number.isInteger(age) ||
        age < 0 ||
        age > 120
      ) {
        return res.status(400).json({
          code: 400,
          message: 'minAge 必须是0到120之间的整数'
        });
      }
    }
  
    // =========================
    // 校验 maxAge
    // =========================
  
    if (maxAge !== undefined) {
  
      const age = Number(maxAge);
  
      if (
        !Number.isInteger(age) ||
        age < 0 ||
        age > 120
      ) {
        return res.status(400).json({
          code: 400,
          message: 'maxAge 必须是0到120之间的整数'
        });
      }
    }
  
    // =========================
    // 校验年龄范围
    // =========================
  
    if (
      minAge !== undefined &&
      maxAge !== undefined
    ) {
  
      const min = Number(minAge);
      const max = Number(maxAge);
  
      if (min > max) {
        return res.status(400).json({
          code: 400,
          message: 'minAge 不能大于 maxAge'
        });
      }
    }
  
    // 校验通过
    next();
  }
  
  module.exports = ageValidation;