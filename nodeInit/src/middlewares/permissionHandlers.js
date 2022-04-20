const adminHandler = async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const { role } = req.params.tokenPayload;

    if (role !== "admin") {
      throw new Error(`No tienes permisos para realizar esta acción. role: ${role}`);
    }

    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

const staffHandler = async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const {role} = req.params.tokenPayload;

    if(role !== "staff"){
      throw new Error(`No tienes permisos para realizar esta acción. role: ${role}`)
    }

    next()
  } catch (error) {
    res.status(401).json({
      succes: false,
      message: error.message,
    });
  }
};

const clientHandler = async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const {role} = req.params.tokenPayload;

    if(role !== "client"){
      throw new Error(`No tienes permisos para realizar esta acción. role: ${role}`)
    }

    next()
  } catch (error) {
    res.status(401).json({
      succes: false,
      message: error.message,
    });
  }
};

module.exports = { 
  adminHandler,
  staffHandler,
  clientHandler,
 };
