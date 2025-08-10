import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Trash2, 
  Plus, 
  LogOut, 
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  CheckCircle,
  X
} from "lucide-react";
import axios from "axios";

export default function AdminGallery() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const fetchImages = async (adminPassword) => {
    setLoading(true);
    setStatus("");
    try {
      const res = await axios.get("/.netlify/functions/list-images", {
        headers: { "x-admin-password": adminPassword }
      });
      setImages(res.data);
      setAuthed(true);
      setStatus("Successfully loaded images!");
    } catch (err) {
      setStatus("Invalid password or failed to fetch images.");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchImages(password.trim());
  };

  const handleDelete = async (public_id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    setStatus("Deleting image...");
    try {
      await axios.post(
        "/.netlify/functions/delete-image",
        { public_id },
        {
          headers: {
            "Content-Type": "application/json",
            "x-admin-password": password.trim(),
          },
        }
      );
      setImages((imgs) => imgs.filter((img) => img.public_id !== public_id));
      setStatus("Image deleted successfully!");
    } catch (err) {
      setStatus("Failed to delete image.");
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    setPassword("");
    setImages([]);
    setStatus("");
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h2>
              <p className="text-gray-600">Enter your password to manage the gallery</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    disabled={loading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Login
                  </>
                )}
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg flex items-center ${
                  status.includes("Successfully") || status.includes("deleted successfully")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.includes("Successfully") || status.includes("deleted successfully") ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                <span className="text-sm">{status}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-600 rounded-xl">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Gallery</h1>
                <p className="text-gray-600">Manage your organization's image gallery</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href="/admin-upload"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload Image
              </a>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Status Message */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl flex items-center justify-between ${
              status.includes("Successfully") || status.includes("deleted successfully")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            <div className="flex items-center">
              {status.includes("Successfully") || status.includes("deleted successfully") ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              <span>{status}</span>
            </div>
            <button
              onClick={() => setStatus("")}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {images.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No images found in the gallery.</p>
            </div>
          ) : (
            images.map((img, index) => (
              <motion.div
                key={img.public_id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.public_id}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-3 font-mono break-all">
                    {img.public_id}
                  </div>
                  
                  {/* Image Details */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{img.width} × {img.height}</span>
                    <span>ID: {img.public_id.split('/').pop()}</span>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(img.public_id)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors duration-200 group/btn"
                  >
                    <Trash2 className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Delete Image
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Stats */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-white rounded-2xl shadow-soft border border-gray-100 p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">{images.length}</div>
                <div className="text-sm text-gray-600">Total Images</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">Active</div>
                <div className="text-sm text-gray-600">Gallery Status</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">Public</div>
                <div className="text-sm text-gray-600">Access Level</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
