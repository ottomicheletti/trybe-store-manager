const {
  getAllProductsModel,
  getProductByIdModel,
  insertNewProductModel,
  updateProductNameModel,
} = require('../models/productModels');

const getAllProductsService = async () => {
  const [data] = await getAllProductsModel();
  if (!data) return [];
  return data;
};

const getProductByIdService = async (id) => {
  const [data] = await getProductByIdModel(id);
  if (!data) return [];
  return data;
};

const insertNewProductService = async (newProduct) => {
  const data = await insertNewProductModel(newProduct);
  return data;
};

const updateProductNameService = async (id, name) => {
  const data = await updateProductNameModel(id, name);
  return data;
};

module.exports = {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
  updateProductNameService,
};
