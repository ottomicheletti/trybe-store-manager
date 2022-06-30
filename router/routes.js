const express = require('express');

const router = express.Router();
const {
  getAllProductsController, getProductByIdController, insertNewProductController,
} = require('../controllers/productControllers');
const { validateProductName } = require('../middlewares/productValidations');

router.post('/products', validateProductName, insertNewProductController);
router.get('/products', getAllProductsController);
router.get('/products/:id', getProductByIdController);

module.exports = router;
