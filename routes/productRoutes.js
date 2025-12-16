const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const { protect, adminOnly } = require('../middleware/auth');

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch products.' });
  }
});

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch product.' });
  }
});

// @route   POST /api/products
// @desc    Create a new product
// @access  Public
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('category').isIn(['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Beverages', 'Snacks', 'Meat', 'Bakery']).withMessage('Invalid category'),
    body('stock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
  ],
  async (req, res) => {
    try {
      // Validate input
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, price, category, image, stock, description } = req.body;

      // Create new product
      const product = await Product.create({
        name,
        price,
        category,
        image,
        stock,
        description,
      });

      res.status(201).json({
        message: 'Product created successfully',
        product,
      });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Server error. Unable to create product.' });
    }
  }
);

// @route   PUT /api/products/:id
// @desc    Update a product
// @access  Public
router.put(
  '/:id',
  [
    body('name').optional().trim().notEmpty().withMessage('Product name cannot be empty'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('category').optional().isIn(['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Beverages', 'Snacks', 'Meat', 'Bakery']).withMessage('Invalid category'),
    body('stock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
  ],
  async (req, res) => {
    try {
      // Validate input
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      // Update product fields
      const { name, price, category, image, stock, description } = req.body;
      
      if (name !== undefined) product.name = name;
      if (price !== undefined) product.price = price;
      if (category !== undefined) product.category = category;
      if (image !== undefined) product.image = image;
      if (stock !== undefined) product.stock = stock;
      if (description !== undefined) product.description = description;

      await product.save();

      res.json({
        message: 'Product updated successfully',
        product,
      });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Server error. Unable to update product.' });
    }
  }
);

// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error. Unable to delete product.' });
  }
});

module.exports = router;
