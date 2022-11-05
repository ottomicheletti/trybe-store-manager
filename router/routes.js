const express = require('express');

const router = express.Router();
const {
  getAllProductsController,
  getProductByIdController,
  insertNewProductController,
  updateProductNameController,
  deleteProductController,
} = require('../controllers/productControllers');
const { validateProductName, validateProductId } = require('../middlewares/productValidations');

router.get('/products', getAllProductsController);
router.get('/products/:id', getProductByIdController);
router.post('/products', validateProductName, insertNewProductController);
router.put('/products/:id', validateProductName, validateProductId, updateProductNameController);
router.delete('/products/:id', validateProductId, deleteProductController);

module.exports = router;
