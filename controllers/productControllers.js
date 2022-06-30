const {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
} = require('../services/productServices');

const getAllProductsController = async (_req, res) => {
  try {
    const product = await getAllProductsService();
    if (!product) {
      res.status(404).json({
        message: 'Product not found',
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductByIdService(id);
    if (!product || product.length === 0) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

const insertNewProductController = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await insertNewProductService(name);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  insertNewProductController,
};
