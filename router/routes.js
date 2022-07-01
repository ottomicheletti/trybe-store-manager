const express = require('express');

const router = express.Router();
const {
  getAllProductsController,
  getProductByIdController,
  insertNewProductController,
  updateProductNameController,
} = require('../controllers/productControllers');
const { validateProductName, validateProductId } = require('../middlewares/productValidations');

router.get('/products', getAllProductsController);
router.post('/products', validateProductName, insertNewProductController);
router.put('/products/:id', validateProductName, validateProductId, updateProductNameController);
router.get('/products/:id', getProductByIdController);

// router.get('/sales', getAllSalesController)
// router.post('/sales', validateSale, insertNewSaleController);
// router.get('/sales/:id', getSaleByIdController)

module.exports = router;
