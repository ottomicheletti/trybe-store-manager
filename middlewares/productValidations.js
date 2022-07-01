const { getProductByIdModel } = require('../models/productModels');

const validateProductName = (req, res, next) => {
  const { name } = req.body;
  switch (true) {
    case !name:
      return res.status(400).json({
        message: '"name" is required' });
    case name.length < 5:
      return res.status(422).json({
        message: '"name" length must be at least 5 characters long' });
    default:
      next();
  }
};

const validateProductId = async (req, res, next) => {
  const { id } = req.params;
  const [searchedId] = await getProductByIdModel(id);

  switch (true) {
    case searchedId === undefined:
      return res.status(404).json({
        message: 'Product not found' });
    default:
      next();
  }
};

module.exports = { validateProductName, validateProductId };
