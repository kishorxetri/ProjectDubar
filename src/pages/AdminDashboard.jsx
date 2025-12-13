import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { noticeAPI } from '../services/api';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await noticeAPI.getAll();
      setNotices(response.notices || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notices:', error);
      setError('Failed to load notices');
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleAddNew = () => {
    setEditingNotice(null);
    setFormData({ title: '', description: '' });
    setShowForm(true);
    setError('');
    setSuccess('');
  };

  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({ title: notice.title, description: notice.description });
    setShowForm(true);
    setError('');
    setSuccess('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notice?')) {
      return;
    }

    try {
      await noticeAPI.delete(id);
      setSuccess('Notice deleted successfully');
      fetchNotices();
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error deleting notice:', error);
      setError('Failed to delete notice');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title || !formData.description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      if (editingNotice) {
        await noticeAPI.update(editingNotice._id, formData.title, formData.description);
        setSuccess('Notice updated successfully');
      } else {
        await noticeAPI.create(formData.title, formData.description);
        setSuccess('Notice created successfully');
      }

      setShowForm(false);
      setFormData({ title: '', description: '' });
      setEditingNotice(null);
      fetchNotices();
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error saving notice:', error);
      setError(error.response?.data?.message || 'Failed to save notice');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
              <p className="text-sm text-slate-600">Welcome, {admin?.username}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-slate-600 hover:text-green-600 transition-colors"
              >
                View Website
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            {success}
          </div>
        )}
        {error && !showForm && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Add Notice Button */}
        <div className="mb-6">
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaPlus />
            Add New Notice
          </button>
        </div>

        {/* Notice Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  {editingNotice ? 'Edit Notice' : 'Add New Notice'}
                </h2>

                {error && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="Enter notice title"
                      maxLength={200}
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">{formData.title.length}/200 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                      placeholder="Enter notice description"
                      rows={6}
                      maxLength={1000}
                      required
                    />
                    <p className="text-xs text-slate-500 mt-1">{formData.description.length}/1000 characters</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {editingNotice ? 'Update Notice' : 'Create Notice'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingNotice(null);
                        setFormData({ title: '', description: '' });
                        setError('');
                      }}
                      className="flex-1 bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Notices List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              All Notices ({notices.length})
            </h2>
          </div>

          {notices.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <p className="text-lg">No notices yet</p>
              <p className="text-sm mt-2">Click "Add New Notice" to create your first notice</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {notices.map((notice) => (
                <div key={notice._id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-800">
                          {notice.title}
                        </h3>
                        {notice.isNew && (
                          <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-semibold rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 mb-3">{notice.description}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <FaCalendarAlt className="w-3.5 h-3.5" />
                        <span>Created: {formatDate(notice.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(notice)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FaEdit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
