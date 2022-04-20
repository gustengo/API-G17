const logErrors = (err, req, res, next) => {
    console.log("Ha ocurrido un error");
    console.error(err);
    next(err);
  };
  
  const errorHandler = (err, req, res, next) => {
    const { message } = err;
  
    res.status(500).json({ message });
  };
  
  module.exports = { logErrors, errorHandler };