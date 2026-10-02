// Error Handler（错误处理器）
function errorHandler(err, req, res, next) {

    // console.error（输出错误信息）
    console.error(err);
  
    // 返回服务器错误
    res.status(500).json({
      code: 500,
      message: '服务器内部错误'
    });
  }
  
  module.exports = errorHandler;