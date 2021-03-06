const express = require('express');
const router = express.Router();
const {
    getAllProductById,
    getAllProducts,
} = require('../controller/productController');

router.get('/', getAllProducts);

router.get('/:id', getAllProductById);

module.exports = router;
