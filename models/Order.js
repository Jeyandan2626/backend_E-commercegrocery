const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    items: [{
      productId: String,
      productName: String,
      price: Number,
      quantity: Number,
      unit: String
    }],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'Delivered',
      enum: ['Pending', 'Processing', 'Delivered', 'Cancelled']
    },
    orderDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;