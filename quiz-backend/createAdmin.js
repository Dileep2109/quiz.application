require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');

    const createAdminUser = async () => {
      const adminUser = await User.findOne({ username: 'admin' });

      if (adminUser) {
        console.log('Admin user already exists');
        return;
      }

      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newAdminUser = new User({
        username: 'admin',
        password: hashedPassword,
        isAdmin: true,
      });

      try {
        await newAdminUser.save();
        console.log('Admin user created successfully');
      } catch (error) {
        console.error('Error creating admin user:', error);
      } finally {
        mongoose.connection.close();
      }
    };

    createAdminUser();
  })
  .catch((err) => console.log('Error connecting to MongoDB:', err));
