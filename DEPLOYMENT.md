# Backend Deployment Guide for Render

## Step-by-Step Deployment Process

### 1. Prepare Repository
```bash
# Navigate to backend folder
cd backend

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial backend setup for deployment"

# Add remote repository
git remote add origin https://github.com/Jeyandan2626/backend_E-commercegrocery.git

# Push to GitHub
git push -u origin main
```

### 2. Render Deployment Settings

**Service Type**: Web Service
**Repository**: https://github.com/Jeyandan2626/backend_E-commercegrocery.git
**Branch**: main
**Root Directory**: (leave empty if backend is in root)

**Build Settings**:
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 3. Environment Variables (Add in Render Dashboard)

```env
MONGO_URL=mongodb+srv://jeyandan100200_db_user:jeyandu@cluster0.dw7shec.mongodb.net/freshmart?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.netlify.app
PORT=10000
```

### 4. Important Notes

- **Port**: Render automatically assigns a port, but you can set PORT=10000 in env vars
- **MongoDB**: Ensure your MongoDB Atlas allows connections from anywhere (0.0.0.0/0) or add Render's IP ranges
- **CORS**: The server is configured to accept requests from localhost and your frontend domain
- **SSL**: Render provides HTTPS automatically

### 5. Post-Deployment

1. **Test API**: Visit your Render URL to see the API welcome message
2. **Seed Data**: You can run seed scripts via Render's shell or manually add products through the admin panel
3. **Update Frontend**: Update your frontend's API URL to point to the Render deployment

### 6. Common Issues & Solutions

**MongoDB Connection Issues**:
- Verify connection string in environment variables
- Check MongoDB Atlas network access settings
- Ensure database user has proper permissions

**CORS Errors**:
- Add your frontend domain to the FRONTEND_URL environment variable
- Check that the frontend is making requests to the correct backend URL

**Build Failures**:
- Ensure package.json has correct dependencies
- Check that all required files are committed to GitHub

### 7. Monitoring

- Use Render's logs to monitor application health
- Set up alerts for deployment failures
- Monitor MongoDB Atlas for connection issues

## API Endpoints (After Deployment)

Your API will be available at: `https://your-service-name.onrender.com`

- GET `/` - API welcome message
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/products` - Get all products
- POST `/api/products` - Create product (no auth required)
- And more...

## Frontend Integration

Update your frontend's API URL to:
```javascript
const API_BASE_URL = 'https://your-service-name.onrender.com/api';
```