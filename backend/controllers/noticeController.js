const Notice = require('../models/Notice');

// @desc    Get all notices
// @route   GET /api/notices
// @access  Public
const getNotices = async (req, res) => {
  try {
    // Get all notices, sorted by creation date (newest first)
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: notices.length,
      notices,
    });
  } catch (error) {
    console.error('Get notices error:', error);
    res.status(500).json({ message: 'Server error while fetching notices' });
  }
};

// @desc    Get single notice
// @route   GET /api/notices/:id
// @access  Public
const getNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    res.status(200).json({
      success: true,
      notice,
    });
  } catch (error) {
    console.error('Get notice error:', error);
    res.status(500).json({ message: 'Server error while fetching notice' });
  }
};

// @desc    Create new notice
// @route   POST /api/notices
// @access  Private (Admin only)
const createNotice = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate input
    if (!title || !description) {
      return res.status(400).json({ message: 'Please provide title and description' });
    }

    // Create notice
    const notice = await Notice.create({
      title,
      description,
    });

    res.status(201).json({
      success: true,
      message: 'Notice created successfully',
      notice,
    });
  } catch (error) {
    console.error('Create notice error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    res.status(500).json({ message: 'Server error while creating notice' });
  }
};

// @desc    Update notice
// @route   PUT /api/notices/:id
// @access  Private (Admin only)
const updateNotice = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Find notice
    let notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    // Update notice
    notice = await Notice.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Notice updated successfully',
      notice,
    });
  } catch (error) {
    console.error('Update notice error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    res.status(500).json({ message: 'Server error while updating notice' });
  }
};

// @desc    Delete notice
// @route   DELETE /api/notices/:id
// @access  Private (Admin only)
const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }

    await notice.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Notice deleted successfully',
    });
  } catch (error) {
    console.error('Delete notice error:', error);
    res.status(500).json({ message: 'Server error while deleting notice' });
  }
};

module.exports = {
  getNotices,
  getNotice,
  createNotice,
  updateNotice,
  deleteNotice,
};
