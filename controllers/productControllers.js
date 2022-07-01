const {
  getAllProductsService,
  getProductByIdService,
  insertNewProductService,
  updateProductNameService,
  deleteProductService,
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
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
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
