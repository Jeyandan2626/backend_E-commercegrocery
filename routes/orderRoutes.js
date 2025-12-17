const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// @route   POST /api/orders
// @desc    Create a new order
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { userId, userName, userEmail, items, totalAmount } = req.body;

    const order = await Order.create({
      userId,
      userName,
      userEmail,
      items,
      totalAmount,
      status: 'Delivered'
    });

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error. Unable to create order.' 
    });
  }
});

// @route   GET /api/orders
// @desc    Get all orders (for admin)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 }).limit(10);
    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error. Unable to fetch orders.' 
    });
  }
});

module.exports = router;