const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Load environment variables
dotenv.config();

// Sample products data
const sampleProducts = [
  {
    name: 'Fresh Tomatoes',
    price: 45,
    category: 'Vegetables',
    stock: 150,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300',
    description: 'Fresh, ripe tomatoes perfect for salads and cooking'
  },
  {
    name: 'Organic Milk',
    price: 60,
    category: 'Dairy',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300',
    description: 'Pure organic milk from local farms'
  },
  {
    name: 'Fresh Eggs',
    price: 80,
    category: 'Dairy',
    stock: 200,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300',
    description: 'Farm-fresh eggs, rich in protein'
  },
  {
    name: 'Bananas',
    price: 40,
    category: 'Fruits',
    stock: 120,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
    description: 'Sweet, ripe bananas rich in potassium'
  },
  {
    name: 'Green Apples',
    price: 120,
    category: 'Fruits',
    stock: 90,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300',
    description: 'Crisp and tangy green apples'
  },
  {
    name: 'Fresh Carrots',
    price: 35,
    category: 'Vegetables',
    stock: 140,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300',
    description: 'Crunchy, sweet carrots loaded with vitamins'
  },
  {
    name: 'Strawberries',
    price: 150,
    category: 'Fruits',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300',
    description: 'Sweet and juicy strawberries'
  },
  {
    name: 'Cheddar Cheese',
    price: 200,
    category: 'Dairy',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300',
    description: 'Aged cheddar cheese with rich flavor'
  },
  {
    name: 'Red Bell Peppers',
    price: 55,
    category: 'Vegetables',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300',
    description: 'Fresh, crisp bell peppers'
  },
  {
    name: 'Oranges',
    price: 90,
    category: 'Fruits',
    stock: 110,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=300',
    description: 'Juicy oranges packed with Vitamin C'
  },
  {
    name: 'Greek Yogurt',
    price: 75,
    category: 'Dairy',
    stock: 70,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300',
    description: 'Creamy Greek yogurt, high in protein'
  },
  {
    name: 'Fresh Broccoli',
    price: 50,
    category: 'Vegetables',
    stock: 85,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300',
    description: 'Nutritious broccoli florets'
  }
];

// Connect to MongoDB and seed products
const seedProducts = async () => {
  try {
    // Connect to MongoDB
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Connected to MongoDB');

    // Clear existing products (optional - comment out to keep existing data)
    // await Product.deleteMany({});
    // console.log('Cleared existing products');

    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${products.length} products!`);

    // Display seeded products
    console.log('\nSeeded Products:');
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ₹${product.price} (${product.category})`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

// Run the seed function
seedProducts();
