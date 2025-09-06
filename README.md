# 📰 News Web Application

A modern, responsive news web application built with **React + Vite** that delivers real-time news articles and weather updates. Features Firebase authentication for personalized user experience and integrates multiple APIs for comprehensive information delivery.

## 🚀 Features..

### 📱 Core Functionality
- **Real-Time News Feed** - Latest news articles from multiple sources via NewsAPI
- **Weather Forecasting** - Current weather conditions and forecasts
- **User Authentication** - Secure login/signup with Firebase Auth
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Category Filtering** - Browse news by categories (Technology, Sports, Business, etc.)
- **Search Functionality** - Find specific news articles and topics
- **Personalized Experience** - Save preferences and favorite articles

### 🎨 User Experience
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Fast Performance** - Optimized with Vite for lightning-fast development and builds
- **Progressive Loading** - Smooth content loading with skeleton screens
- **Dark/Light Mode** - Theme customization for better user experience
- **Mobile-First Design** - Responsive layout across all screen sizes

## 🛠️ Technology Stack

### Frontend
- **React.js** - Component-based UI library for dynamic interfaces
- **Vite** - Next-generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for single-page application
- **Axios** - Promise-based HTTP client for API requests

### Backend Services
- **Firebase Authentication** - Secure user authentication and authorization
- **NewsAPI.org** - Comprehensive news data from thousands of sources
- **Weather API** - Real-time weather data and forecasting services

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **PostCSS** - CSS processing and optimization
- **Git** - Version control and collaborative development

## 📁 Project Structure

```
NEWS-FRONT/
├── node_modules/          # Dependencies
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/          # Images, icons, and media files
│   ├── component/       # Reusable React components
│   ├── firebase/        # Firebase configuration and services
│   ├── pages/           # Page components and routing
│   ├── services/        # API services and utilities
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables
├── .gitignore          # Git ignore configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Firebase account** for authentication setup
- **API keys** for NewsAPI and Weather API

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rewa17Shankar/News-Web.git
   cd News-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # News API Configuration
   VITE_NEWS_API_KEY=your_newsapi_key
   VITE_NEWS_API_URL=https://newsapi.org/v2
   
   # Weather API Configuration
   VITE_WEATHER_API_KEY=your_weather_api_key
   VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   ```

4. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google providers
   - Copy your Firebase configuration to the `.env` file

5. **API Keys Setup**
   - Get your News API key from [NewsAPI.org](https://newsapi.org/)
   - Obtain Weather API key from [OpenWeatherMap](https://openweathermap.org/api)

6. **Start Development Server**
   ```bash
   npm run dev
   ```

7. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## 🎯 Key Components

### Authentication System
- **Login/Signup** - Firebase-powered authentication
- **Protected Routes** - Secure access to personalized features
- **User Profile** - Manage account settings and preferences

### News Features
- **News Feed** - Paginated articles with infinite scroll
- **Category Navigation** - Filter by news categories
- **Article Search** - Real-time search functionality
- **Article Details** - Full article view with sharing options

### Weather Integration
- **Current Weather** - Location-based weather display
- **Weather Forecast** - Multi-day weather predictions
- **Weather Widgets** - Integrated weather information

## 🎨 UI/UX Highlights

- **Modern Design System** - Consistent design patterns with Tailwind CSS
- **Responsive Grid Layout** - Adaptive layouts for all screen sizes
- **Loading States** - Skeleton loaders and progress indicators
- **Error Handling** - User-friendly error messages and fallbacks
- **Accessibility** - WCAG compliant with keyboard navigation support

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically

# Deployment
npm run deploy       # Deploy to hosting platform
```

## 🌐 API Integration

### NewsAPI.org
- **Endpoints Used**: `/everything`, `/top-headlines`, `/sources`
- **Features**: Category filtering, search, pagination
- **Rate Limits**: 1000 requests/day (free tier)

### Weather API
- **Current Weather**: Real-time weather conditions
- **Forecasting**: 5-day weather predictions
- **Geolocation**: Location-based weather data

### Firebase Authentication
- **Email/Password**: Traditional authentication method
- **Google OAuth**: Social login integration
- **Session Management**: Secure token-based authentication

## 🚀 Deployment

The application is optimized for deployment on various platforms:

### Recommended Platforms
- **Vercel** - Optimal for React + Vite applications
- **Netlify** - Simple deployment with continuous integration
- **Firebase Hosting** - Seamless integration with Firebase services

### Build Optimization
- **Vite Build** - Optimized production builds with code splitting
- **Asset Optimization** - Compressed images and minified code
- **Caching Strategy** - Efficient caching for improved performance

## 🎯 Future Enhancements

- **Push Notifications** - Real-time news alerts
- **Offline Reading** - PWA capabilities for offline access
- **Social Sharing** - Share articles across social platforms
- **Bookmarking** - Save articles for later reading
- **Advanced Search** - Filters by date, source, and relevance
- **Multi-language Support** - International news coverage

## 📈 Performance Features

- **Lazy Loading** - Components and images loaded on demand
- **Code Splitting** - Optimized bundle sizes
- **Caching** - Efficient API response caching
- **SEO Optimization** - Meta tags and structured data
- **Progressive Web App** - Installable web application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rewa Shankar**  
- GitHub: [@Rewa17Shankar](https://github.com/Rewa17Shankar)
- Project Link: https://news-web-r1hd.vercel.app/

---

⭐ **If you found this project helpful, please consider giving it a star!**

*Built with ❤️ using React, Vite, and modern web technologies*
<img width="1309" height="606" alt="image" src="https://github.com/user-attachments/assets/9d6f441f-db13-4cb8-be64-1d9a6a12970f" />
<img width="1313" height="599" alt="image" src="https://github.com/user-attachments/assets/1df6a320-9e04-468f-a964-758554c17099" />
<img width="1313" height="604" alt="image" src="https://github.com/user-attachments/assets/73bbdebd-5a11-4b76-90f6-c0a19590a5b4" />
<img width="372" height="291" alt="image" src="https://github.com/user-attachments/assets/03b56355-c641-46e6-a110-a430ba6c538f" />
<img width="1294" height="267" alt="image" src="https://github.com/user-attachments/assets/fb85fbf8-504d-4471-a27d-ca592f14b6fe" />
