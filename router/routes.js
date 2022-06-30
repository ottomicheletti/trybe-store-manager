const express = require('express');

const router = express.Router();
const {
  getAllProducts_C, getProductById_C,
} = require('../controllers/productControllers');

router.get('/products', getAllProducts_C);
router.get('/products/:id', getProductById_C);

module.exports = router;
