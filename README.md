# 🌍 WanderLust - Travel Booking Platform

A modern, full-stack travel booking application built with Node.js, Express, and MongoDB. WanderLust provides a seamless experience for users to discover, list, and book unique accommodations worldwide.

## 🚀 Live Demo & Deployment

**Experience WanderLust Live!**

* **Live Application:** [https://wanderlust-nk04.onrender.com/listings](https://wanderlust-1-uoyq.onrender.com/listings)


---

## 🖼️ Landing Page Preview

Here's a preview of the WanderLust travel booking platform:

![WanderLust Landing Page](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=WanderLust+Travel+Platform)

---

## 🌟 Features

### 🔐 Authentication System
- **User Registration**: Secure signup with email validation
- **User Login**: Password-protected authentication with Passport.js
- **Session Management**: Persistent login state with MongoDB session store
- **Protected Routes**: Listing creation and management requires authentication

### 🏠 Property Management
- **Property Listings**: Browse available accommodations with images and details
- **Create Listings**: Add new properties with rich details and images
- **Edit & Update**: Modify existing listings with owner verification
- **Delete Listings**: Remove properties with cascade review cleanup
- **Image Upload**: Cloudinary integration for property images

### ⭐ Review System
- **5-Star Rating**: Rate properties from 1-5 stars with validation
- **Detailed Reviews**: Add comprehensive comments and feedback
- **User Attribution**: All reviews linked to authenticated users
- **Review Management**: Edit and delete your own reviews

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern Styling**: Built with Bootstrap and custom CSS
- **Interactive Filters**: Category-based property discovery
- **Flash Messages**: Real-time feedback for user actions
- **Clean Navigation**: Intuitive layout and user experience

### 🔍 Discovery & Search
- **Browse All Properties**: View complete listing catalog
- **Category Filters**: Filter by Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms
- **Property Details**: Complete information including location, price, and amenities
- **User-friendly Interface**: Easy navigation and search functionality

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **Joi** - Data validation
- **Multer** - File upload handling
- **Cloudinary** - Image storage and management

### Frontend
- **EJS** - Server-side templating engine
- **EJS-Mate** - Layout engine for EJS
- **Bootstrap** - CSS framework for responsive design
- **Font Awesome** - Icon library
- **Custom CSS** - Styling and animations
- **JavaScript** - Client-side interactivity

### Development Tools
- **Method Override** - HTTP method override
- **Connect Flash** - Flash message middleware
- **Dotenv** - Environment variable management
- **MongoDB Atlas** - Cloud database hosting

## 📁 Project Structure

```
wanderlust/
├── app.js                 # Main application entry point
├── cloudConfig.js         # Cloudinary configuration
├── schema.js              # Joi validation schemas
├── middleware.js          # Custom middleware functions
├── package.json           # Project dependencies
├── render.yaml            # Render deployment configuration
├── README.md              # Project documentation
│
├── controllers/           # Route controllers
│   ├── listings.js        # Property CRUD operations
│   ├── review.js          # Review operations
│   └── users.js           # User authentication
│
├── models/                # Database models
│   ├── listing.js         # Property schema
│   ├── reviews.js         # Review schema
│   └── user.js            # User schema
│
├── routes/                # Application routes
│   ├── listing.js         # Property routes
│   ├── review.js          # Review routes
│   └── user.js            # User routes
│
├── utils/                 # Utility functions
│   ├── ExpressError.js    # Error handling
│   └── wrapAsync.js       # Async wrapper
│
├── views/                 # EJS templates
│   ├── includes/          # Reusable components
│   │   ├── flash.ejs      # Flash messages
│   │   ├── footer.ejs     # Footer component
│   │   └── navbar.ejs     # Navigation bar
│   ├── layouts/           # Layout templates
│   │   └── boilerplate.ejs # Main layout
│   ├── listings/          # Property views
│   │   ├── index.ejs      # All properties
│   │   ├── show.ejs       # Single property
│   │   ├── new.ejs        # Create form
│   │   └── edit.ejs       # Edit form
│   ├── users/             # User views
│   │   ├── login.ejs      # Login page
│   │   └── signup.ejs     # Registration page
│   └── error.ejs          # Error page
│
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   │   ├── style.css      # Main styles
│   │   └── rating.css     # Rating styles
│   └── js/                # JavaScript files
│       └── script.js      # Client-side scripts
│
├── uploads/               # File uploads directory
└── init/                  # Database initialization
    ├── data.js            # Sample data
    └── index.js           # Init script
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v22.13.1 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wanderlust
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   ATLASDB_URL=your_mongodb_atlas_connection_string
   
   # Session Configuration
   SECRET=your_session_secret_key_here
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Application Configuration
   PORT=8080
   NODE_ENV=development
   ```

4. **Database Setup**
   - Create a MongoDB database (local or Atlas)
   - Update the `ATLASDB_URL` in your `.env` file
   - Ensure your database is accessible

5. **Cloudinary Setup**
   - Create a [Cloudinary](https://cloudinary.com/) account
   - Get your cloud name, API key, and API secret
   - Update the Cloudinary credentials in your `.env` file

### Running the Application

1. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

2. **Production Mode**
   ```bash
   npm start
   ```

## 🔧 API Endpoints

### User Authentication
- `GET /login` - Login page
- `POST /login` - User login
- `GET /signup` - Registration page
- `POST /signup` - User registration
- `GET /logout` - User logout

### Property Management
- `GET /listings` - Get all properties
- `GET /listings/new` - Create property form
- `POST /listings` - Create new property
- `GET /listings/:id` - Get property by ID
- `GET /listings/:id/edit` - Edit property form
- `PUT /listings/:id` - Update property
- `DELETE /listings/:id` - Delete property

### Review System
- `POST /listings/:id/reviews` - Create review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with email and password
2. **Login**: Secure authentication with Passport.js and session management
3. **Session Management**: User data stored in MongoDB session store
4. **Protected Routes**: Property creation and management requires authentication
5. **Logout**: Clear session and redirect to home

## 🎨 UI Components

- **Navbar**: Responsive navigation with authentication status
- **Property Cards**: Display property information with images
- **Property Details**: Complete property information and reviews
- **Forms**: Login, registration, and property forms with validation
- **Flash Messages**: User feedback for actions
- **Category Filters**: Interactive property discovery

## 🔒 Security Features

- **Password Hashing**: Secure password storage with Passport.js
- **Input Validation**: Joi schema validation on all inputs
- **Session Management**: Secure session handling with MongoDB
- **Owner Verification**: Only property owners can modify listings
- **Environment Variables**: Sensitive data protection

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Render Deployment
- Deployed to Render cloud platform
- Set environment variables for production
- Configure MongoDB Atlas connection
- Cloudinary integration for image storage

### Environment Variables for Production
```env
ATLASDB_URL=your_production_mongodb_url
SECRET=your_production_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=10000
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

---

**WanderLust** - Your gateway to unique travel experiences! 🌍✨

