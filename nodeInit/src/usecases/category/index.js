const Categories = require("../../models/categories").model;

const getAll = async () => {
    // Obtener todas las categorias
    return await Categories.find({}).exec()
};

const getById = async (id) => {
    //Obtener una categoria por id
    return await Categories.findById(id).exec();
};

const create = async (categoriesData) => {
    const {name, description, quantity} = categoriesData;
    const newCategories = new Categories({
        name,
        description,
        quantity,
    });

    const savedCategories = await newCategories.save();

    return savedCategories;
}

const update = async(id, categoriesData) => {
    const {name, description, quantity} = categoriesData;

    const updatedCategories = await Categories.findByIdAndUpdate(
        id,
        {
            name,
            description,
            quantity,
        },
        { new:true }
    ).exec();

    return updatedCategories;
};

const patch = async(id, categoriesData) => {
    return await Categories.findByIdAndUpdate(
        id,
        {...categoriesData},
        { new: true}
    ).exec();
};

const del = async(id) => {
    // Eliminar una categoria
    return await Categories.findByIdAndDelete(id).exec();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    patch,
    del,
};

