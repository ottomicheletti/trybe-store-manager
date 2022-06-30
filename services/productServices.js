const {
  getAllProducts_M,
  getProductById_M,
} = require('../models/productModels');

const getAllProducts_S = async () => {
  const [products] = await getAllProducts_M();
  if (!products) return [];
  return products;
};

const getProductById_S = async (id) => {
  const [product] = await getProductById_M(id);
  if (!product) return [];
  return product;
};

module.exports = {
  getAllProducts_S,
  getProductById_S,
};
