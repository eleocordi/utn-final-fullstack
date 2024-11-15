const mongoose = require('mongoose');
const Producto = require('../models/ProductsModel');

// Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un hechizo por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Crear un nuevo Producto
exports.createProduct = async (req, res) => {
  const product = new Product({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  });
  
  try {
    const nuevoProduct = await product.save();
    res.status(201).json(nuevoProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un Producto por ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.nombre = req.body.nombre || product.nombre;
      product.descripcion = req.body.descripcion || product.descripcion;
      product.precio = req.body.precio || product.precio;
      
      const productActualizado = await product.save();
      res.json(productActualizado);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un Producto por ID
exports.deleteProduct = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};