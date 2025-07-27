# 🌍 WanderLust - Airbnb Clone

A full-stack web application built with Node.js, Express, and MongoDB that replicates the core functionality of Airbnb. Users can discover, list, and book unique accommodations around the world.


## 🚀 Live Demo & Deployment

**Experience WanderLust Live!**

This full-stack application, encompassing both the frontend and backend, is seamlessly deployed on **Railway**.

* **Live Application URL:** [https://honest-prosperity-production.up.railway.app](https://honest-prosperity-production.up.railway.app)

---

## 🖼️ Landing Page Preview

Here's a preview of the WanderLust landing page:

![WanderLust Landing Page](https://github.com/AmanVerma0903/WanderLust/blob/2399909fcec6a8757937f852d7a6a55eafdd2236/wanderlust.png)

---




## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login with Passport.js
- Session management with MongoDB session store
- Protected routes for authenticated users
- Owner-only access for listing management

### 🏠 Listing Management
- Create, read, update, and delete property listings
- Image upload with Cloudinary integration
- Rich property details (title, description, price, location, country)
- Owner verification for listing modifications

### ⭐ Review System
- Rate properties from 1-5 stars
- Add detailed comments and reviews
- Automatic review cleanup when listings are deleted
- User attribution for all reviews

### 🎨 User Interface
- Responsive design with modern UI/UX
- EJS templating engine for dynamic content
- Interactive filters for property discovery
- Flash messages for user feedback
- Clean and intuitive navigation

### 🔍 Search & Discovery
- Browse all available listings
- Filter properties by categories (Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms)
- Detailed property pages with images and information

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **Joi** - Data validation

### Frontend
- **EJS** - Embedded JavaScript templating
- **EJS-Mate** - Layout engine for EJS
- **CSS3** - Styling and responsive design
- **Font Awesome** - Icons

### Cloud Services
- **Cloudinary** - Image upload and storage
- **MongoDB Atlas** - Cloud database hosting

### Development Tools
- **Multer** - File upload handling
- **Method Override** - HTTP method override
- **Connect Flash** - Flash message middleware
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v22.13.1 or higher)
- MongoDB (local or Atlas connection)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Database Setup**
   - Set up a MongoDB database (local or Atlas)
   - Update the `ATLASDB_URL` in your `.env` file

5. **Cloudinary Setup**
   - Create a Cloudinary account
   - Get your cloud name, API key, and API secret
   - Update the Cloudinary credentials in your `.env` file

## 🏃‍♂️ Running the Application

1. **Start the server**
   ```bash
   npm start
   ```

2. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
wanderlust/
├── app.js                 # Main application file
├── cloudConfig.js         # Cloudinary configuration
├── controllers/           # Route controllers
│   ├── listings.js
│   ├── review.js
│   └── users.js
├── init/                  # Database initialization
│   ├── data.js
│   └── index.js
├── middleware.js          # Custom middleware
├── models/               # Database models
│   ├── listing.js
│   ├── reviews.js
│   └── user.js
├── public/               # Static assets
│   ├── css/
│   └── js/
├── routes/               # Application routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── uploads/              # File uploads directory
├── utils/                # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/                # EJS templates
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
└── package.json
```

## 🔧 Key Features Implementation

### Authentication System
- Uses Passport.js with Local Strategy
- Session-based authentication with MongoDB session store
- Protected routes with middleware
- User registration and login forms

### Listing CRUD Operations
- Full CRUD functionality for property listings
- Image upload with Cloudinary integration
- Owner verification for modifications
- Automatic cleanup of associated reviews

### Review System
- Rating system (1-5 stars)
- Comment functionality
- User attribution
- Cascade deletion with listings

### Security Features
- Input validation with Joi
- Session management
- Owner-only access control
- Secure file upload handling

## 🌟 Future Enhancements

- [ ] Advanced search and filtering
- [ ] Booking system
- [ ] Payment integration
- [ ] Real-time messaging
- [ ] Mobile app development
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Social media integration


## 👨‍💻 Author

**Aman Verma**


## 🙏 Acknowledgments

- Inspired by Airbnb's design and functionality
- Built with modern web technologies
- Special thanks to the open-source community

---



