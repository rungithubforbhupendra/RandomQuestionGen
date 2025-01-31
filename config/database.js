const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    if (!process.env.DATABASE_URL) {
        throw new Error('MONGO_URI is not defined in .env file');
      }
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};   

module.exports = dbConnect;
