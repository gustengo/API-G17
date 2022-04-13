const Product = require("../../models/products").model;

const getAll = async () => {
  // Obtener todos los productos
  return await Product.find({}).exec();
};

const getById = async (id) => {
  // Obtener un producto por id
  return await Product.findById(id).exec();
};

const create = async (productData) => {
  const { name, price, description, image } = productData;
  const newProduct = new Product({
    name,
    description,
    price,
    image,
  });

  const savedProduct = await newProduct.save();

  return savedProduct;
};

const update = async (id, productData) => {
  const { name, description, price, image } = productData;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      name,
      description,
      price,
      image,
    },
    { new: true }
  ).exec();

  return updatedProduct;
};

const patch = async (id, productData) => {
  return await Product.findByIdAndUpdate(
    id,
    { ...productData },
    { new: true }
  ).exec();
};

const del = async (id) => {
  // Eliminar un producto
  return await Product.findByIdAndDelete(id).exec();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  patch,
};