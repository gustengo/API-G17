const  express = require("express");
const category = require ("../usecases/category")

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const categories = await category.getAll();

        res.json({
            success: true,
            payload: categories,
        });

    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;

    const payload = await category.getById(id);

    res.json({
        success: true,
        payload,
    });
});

router.post("/", async (req, res) => {
    const {name, description, quantity} = req.body;

    const categoryCreated = await category.create({
        name,
        description, 
        quantity,
    });

    res.json({
        success: true,
        message: "Categoria creada",
        payload: categoryCreated,
    });
});

router.put("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;

        const {name, description, quantity} = req.body;  
        
        const categoryUpdated = await category.update(id, {
            name,
            description,
            quantity
        });

        res.json({
            succes: true,
            message: `Categoria ${id} actualizada`,
            payload: categoryUpdated,
        });
    } catch (error) {
        next(error)
    }

})

router.patch("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        const categoryUpdated = await category.patch(id, { ...req.body });
    
        res.json({
          success: true,
          message: `Categoria ${id} actualizado`,
          payload: categoryUpdated,
        });
    } catch (error) {
        next(error)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const categoryDeleted = await category.del(id);
    
        res.json({
          success: true,
          message: `Categoria ${id} eliminada`,
          payload: categoryDeleted,
        });
      } catch (error) {
        next(error);
      }
});

module.exports = router;

//Me falta el usuario