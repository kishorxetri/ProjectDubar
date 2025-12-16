const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createMember,
  getAllMembers,
  deleteMember,
} = require('../controllers/memberController');

// Public route - anyone can submit membership
router.post('/', createMember);

// Protected routes - admin only
router.get('/', protect, getAllMembers);
router.delete('/:id', protect, deleteMember);

module.exports = router;
