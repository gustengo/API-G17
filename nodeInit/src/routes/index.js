const productsRouter = require("./products");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
  app.use("/categories", categoriesRouter);
  app.use("/auth", authRouter);
};

module.exports = apiRouter;
