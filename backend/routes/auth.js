const express = require('express');
const router = express.Router();
const { login, register, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/login', login);
router.post('/register', register); // Can be disabled after first admin is created

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;
