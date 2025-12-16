const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      enum: ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Beverages', 'Snacks', 'Meat', 'Bakery'],
    },
    unit: {
      type: String,
      default: 'kg',
      enum: ['kg', 'unit', 'liter', 'dozen'],
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300',
    },
    stock: {
      type: Number,
      default: 100,
      min: [0, 'Stock cannot be negative'],
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'In Stock',
      enum: ['In Stock', 'Low Stock', 'Out of Stock'],
    },
  },
  {
    timestamps: true,
  }
);

// Auto-update status based on stock
productSchema.pre('save', function(next) {
  if (this.stock === 0) {
    this.status = 'Out of Stock';
  } else if (this.stock <= 10) {
    this.status = 'Low Stock';
  } else {
    this.status = 'In Stock';
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
