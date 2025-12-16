const Member = require('../models/Member');

// @desc    Create a new member
// @route   POST /api/members
// @access  Public
exports.createMember = async (req, res) => {
  try {
    const { name, phone, address, email } = req.body;

    // Validate required fields
    if (!name || !phone || !address || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Create member
    const member = await Member.create({
      name,
      phone,
      address,
      email,
    });

    res.status(201).json({
      success: true,
      message: 'Membership application submitted successfully',
      member,
    });
  } catch (error) {
    console.error('Error creating member:', error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered',
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Failed to submit membership application',
    });
  }
};

// @desc    Get all members
// @route   GET /api/members
// @access  Private (Admin only)
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: members.length,
      members,
    });
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch members',
    });
  }
};

// @desc    Delete a member
// @route   DELETE /api/members/:id
// @access  Private (Admin only)
exports.deleteMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Member not found',
      });
    }

    await member.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Member deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting member:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete member',
    });
  }
};
