// 24. Get Products From Database
const asyncHandler = function (func) {
  return function (req, res, next) {
    Promise.resolve(func(req, res, next)).catch(next);
  };
};

export default asyncHandler;
