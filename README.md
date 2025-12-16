# FreshMart Backend API

A Node.js/Express backend for the FreshMart e-commerce grocery application with MongoDB Atlas integration.

## Features

- User authentication (register/login)
- Product management (CRUD operations)
- Contact form handling
- MongoDB Atlas integration
- CORS enabled for frontend integration

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/users` - Get all users

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

## Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=production
FRONTEND_URL=your_frontend_deployment_url
```

## Deployment on Render

1. Push this backend code to your GitHub repository
2. Connect your GitHub repo to Render
3. Set environment variables in Render dashboard
4. Deploy with the following settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: 18 or higher

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Seed products (optional)
npm run seed-products
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **express-validator**: Input validation

## Database Models

- **User**: User authentication and profile
- **Product**: Product catalog management
- **Contact**: Contact form submissions

## License

MIT