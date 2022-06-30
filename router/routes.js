const express = require('express');

const router = express.Router();
const {
  getAllProductsController, getProductByIdController, insertNewProductController,
} = require('../controllers/productControllers');

router.post('/products', insertNewProductController);
router.get('/products', getAllProductsController);
router.get('/products/:id', getProductByIdController);

module.exports = router;
