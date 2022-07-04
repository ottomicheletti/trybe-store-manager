const {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
  updateProductNameService,
  deleteProductService,
  queryProductService,
} = require('../services/productServices');
const { getAllProductsModel } = require('../models/productModels');

const getAllProductsController = async (_req, res) => {
    const products = await getAllProductsService();
    if (!products) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(products);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const { q } = req.query;
  const [product] = await getProductByIdService(id);
  const [queriedProduct] = await queryProductService(q);
  const [products] = await getAllProductsModel();

  switch (true) {
    case id === 'search':
      if (!queriedProduct) {
        return res.status(200).json(products);
      }
      return res.status(200).json(queriedProduct);
    case !product || product.length === 0:
      return res.status(404).json({
        message: 'Product not found',
      });
    default:
      return res.status(200).json(product);
  }
};

const insertNewProductController = async (req, res) => {
  const { name } = req.body;
  const result = await insertNewProductService(name);
  return res.status(201).json(result);
};

const updateProductNameController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await updateProductNameService(id, name);
    return res.status(200).json({ id, name });
  } catch (err) {
    console.error(err);
  }
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProductService(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  insertNewProductController,
  updateProductNameController,
  deleteProductController,
};
