const express = require('express');

const router = express.Router();
const {
  getAllProductsController, getProductByIdController,
} = require('../controllers/productControllers');

router.get('/products', getAllProductsController);
router.get('/products/:id', getProductByIdController);

module.exports = router;
