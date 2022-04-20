// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res) => {
//     console.log("Yo soy un producto");
//     res.json({message:"Yo soy un producto"})
// });

// router.get("/:id", (req, res) => {
//     const {id} = req.params;
//     res.json({message:`${id}`});
//     console.log(id)
// });

// router.post("/", (req, res) => {
//     const {name, price} = req.body;

//     res.json({message: "Producto creado", payload: {name, price}})
// });

// router.put("/:id", (req, res) => {
//     const {id} = req.params;
//     const {name, price} = req.body;

//     res.json({message:`Product ${id} actualizado`, payload:{name,price}});
// });

// router.delete("/:id", (req, res) => {
//     const {id} = req.params;

//     res.json({message: `Producto ${id} eliminado`})
// });

// module.exports = router;

const express = require("express");
const product = require("../usecases/product");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await product.getAll();

    res.json({
      success: true,
      payload: products,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const payload = await product.getById(id);

  res.json({ success: true, payload });
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description, price, image, categories } = req.body;

    const productCreated = await product.create({
      name,
      description,
      price,
      image,
      categories,
    });

    res.json({
      success: true,
      message: "Producto creado",
      payload: productCreated,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, description, price, image } = req.body;

    const productUpdated = await product.update(id, {
      name,
      description,
      price,
      image,
    });

    res.json({
      success: true,
      message: `Producto ${id} actualizado`,
      payload: productUpdated,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const productUpdated = await product.patch(id, { ...req.body });

    res.json({
      success: true,
      message: `Producto ${id} actualizado`,
      payload: productUpdated,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const productDeleted = await product.del(id);

    res.json({
      success: true,
      message: `Producto ${id} eliminado`,
      payload: productDeleted,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
