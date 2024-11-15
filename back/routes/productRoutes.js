const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Rutas para los hechizos
router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/', productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports = router;