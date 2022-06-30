const {
  getAllProducts_S,
  getProductById_S,
} = require('../services/productServices');

const getAllProducts_C = async (_req, res) => {
  try {
    const product = await getAllProducts_S();
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

const getProductById_C = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById_S(id);
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

module.exports = {
  getAllProducts_C,
  getProductById_C,
};
