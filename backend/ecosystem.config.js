module.exports = {
  apps: [
    {
      name: "grocify-backend",
      script: "index.js",
      env: {
        PORT: 5000,
        NODE_ENV: process.env.NODE_ENV,
        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
        SELLER_EMAIL: process.env.SELLER_EMAIL,
        SELLER_PASSWORD: process.env.SELLER_PASSWORD,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
      }
    }
  ]
};
