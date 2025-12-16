const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Fresh Tomatoes',
    price: 45,
    category: 'Vegetables',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1546470427-e5b89b618b84?w=300&h=200&fit=crop',
    description: 'Fresh, juicy tomatoes perfect for cooking and salads',
    stock: 150
  },
  {
    name: 'Organic Bananas',
    price: 40,
    category: 'Fruits',
    unit: 'dozen',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
    description: 'Sweet, organic bananas rich in potassium and vitamins',
    stock: 200
  },
  {
    name: 'Fresh Milk',
    price: 60,
    category: 'Dairy',
    unit: 'liter',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop',
    description: 'Pure, fresh milk from local farms',
    stock: 80
  },
  {
    name: 'Green Apples',
    price: 120,
    category: 'Fruits',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
    description: 'Crisp and tangy green apples, perfect for snacking',
    stock: 100
  },
  {
    name: 'Fresh Carrots',
    price: 35,
    category: 'Vegetables',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop',
    description: 'Crunchy orange carrots packed with beta-carotene',
    stock: 120
  },
  {
    name: 'Cheddar Cheese',
    price: 180,
    category: 'Dairy',
    unit: 'unit',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
    description: 'Rich and creamy cheddar cheese, aged to perfection',
    stock: 50
  },
  {
    name: 'Red Onions',
    price: 30,
    category: 'Vegetables',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop',
    description: 'Fresh red onions with strong flavor for cooking',
    stock: 90
  },
  {
    name: 'Orange Juice',
    price: 85,
    category: 'Beverages',
    unit: 'liter',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop',
    description: 'Fresh squeezed orange juice, vitamin C rich',
    stock: 60
  },
  {
    name: 'Basmati Rice',
    price: 95,
    category: 'Grains',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
    description: 'Premium quality basmati rice with long grains',
    stock: 200
  },
  {
    name: 'Greek Yogurt',
    price: 75,
    category: 'Dairy',
    unit: 'unit',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop',
    description: 'Creamy Greek yogurt with probiotics',
    stock: 45
  },
  {
    name: 'Fresh Strawberries',
    price: 150,
    category: 'Fruits',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=200&fit=crop',
    description: 'Sweet and juicy strawberries, perfect for desserts',
    stock: 75
  },
  {
    name: 'Whole Wheat Bread',
    price: 45,
    category: 'Bakery',
    unit: 'unit',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
    description: 'Freshly baked whole wheat bread, healthy and nutritious',
    stock: 30
  },
  {
    name: 'Bell Peppers',
    price: 65,
    category: 'Vegetables',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=300&h=200&fit=crop',
    description: 'Colorful bell peppers, rich in vitamins',
    stock: 85
  },
  {
    name: 'Almonds',
    price: 220,
    category: 'Snacks',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=300&h=200&fit=crop',
    description: 'Premium quality almonds, rich in protein and healthy fats',
    stock: 40
  },
  {
    name: 'Fresh Chicken',
    price: 180,
    category: 'Meat',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop',
    description: 'Fresh chicken meat, high in protein',
    stock: 25
  },
  {
    name: 'Mangoes',
    price: 110,
    category: 'Fruits',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=200&fit=crop',
    description: 'Sweet and tropical mangoes, king of fruits',
    stock: 95
  },
  {
    name: 'Green Tea',
    price: 125,
    category: 'Beverages',
    unit: 'unit',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop',
    description: 'Premium green tea leaves, rich in antioxidants',
    stock: 55
  },
  {
    name: 'Potatoes',
    price: 25,
    category: 'Vegetables',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop',
    description: 'Fresh potatoes, versatile for all cooking needs',
    stock: 180
  },
  {
    name: 'Chocolate Cookies',
    price: 95,
    category: 'Snacks',
    unit: 'unit',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop',
    description: 'Delicious chocolate chip cookies, perfect for tea time',
    stock: 35
  },
  {
    name: 'Quinoa',
    price: 165,
    category: 'Grains',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
    description: 'Superfood quinoa, high in protein and fiber',
    stock: 70
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('20 products seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();