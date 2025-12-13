const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');
require('dotenv').config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });

    if (existingAdmin) {
      console.log('⚠️  Admin already exists');
      console.log('\n🔐 Login credentials:');
      console.log('Username: admin');
      console.log('Password: dubar2080');
      process.exit(0);
    }

    // Hash password manually
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('dubar2080', salt);

    // Create admin with hashed password
    const admin = new Admin({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@dubaryouth.org',
    });

    // Save without triggering pre-save hook
    await admin.save({ validateBeforeSave: false });

    console.log('✅ Admin created successfully');
    console.log('Username:', admin.username);
    console.log('Email:', admin.email);
    console.log('\n🔐 Login credentials:');
    console.log('Username: admin');
    console.log('Password: dubar2080');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
