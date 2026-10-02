// asyncHandler（异步错误处理包装器）
function asyncHandler(fn) {

    return function (req, res, next) {
  
      // Promise（异步操作）
      Promise
        .resolve(fn(req, res, next))
        .catch(next);
    };
  }
  
  module.exports = asyncHandler;