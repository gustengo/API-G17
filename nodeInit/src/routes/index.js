const productsRouter = require("./products")
const categoriesRouter = require("./categories")

const apiRouter = (app) => {
    app.use("/products", productsRouter);
    app.use("/categories", categoriesRouter)
}

module.exports = apiRouter;