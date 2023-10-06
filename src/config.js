module.exports = {
    // Database connection URI
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name',
  
    // Your secret key for sessions and cookies
    SESSION_SECRET: process.env.SESSION_SECRET || 'your-secret-key',
  
    // Email service configuration
    EMAIL_SERVICE: 'YourEmailService',
    EMAIL_USER: 'YourEmailAddress',
    EMAIL_PASSWORD: 'YourEmailPassword',
  
    // Other configuration settings
  };
  