const {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
} = require('../models/productModels');

const getAllProductsService = async () => {
  const [products] = await getAllProductsModel();
  if (!products) return [];
  return products;
};

const getProductByIdService = async (id) => {
  const [product] = await getProductByIdModel(id);
  if (!product) return [];
  return product;
};

const insertNewProductService = async (newProduct) => {
  const product = await insertNewProductModel(newProduct);
  return product;
};

module.exports = {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
};
