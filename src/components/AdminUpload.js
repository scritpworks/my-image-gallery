import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  Lock, 
  Eye, 
  EyeOff, 
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  CheckCircle,
  X,
  ArrowLeft,
  FileImage
} from "lucide-react";
import axios from "axios";

function resizeFile(file, maxWidth = 1600) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.onerror = reject;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      resolve(dataUrl);
    };

    reader.readAsDataURL(file);
  });
}

export default function AdminUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const fileInputRef = useRef(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validate file type
    if (!selectedFile.type.startsWith('image/')) {
      setStatus("Please select a valid image file.");
      setFile(null);
      setPreview(null);
      return;
    }

    // Validate file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setStatus("File size exceeds 5MB limit.");
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);
    setStatus("");
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setStatus("Please select an image first.");
    if (!passwordRef.current.value.trim())
      return setStatus("Please enter admin password.");

    setUploading(true);
    setStatus("Resizing image...");

    try {
      const dataUrl = await resizeFile(file, 1600);
      setStatus("Uploading image...");

      await axios.post(
        "/.netlify/functions/upload-image",
        { data: dataUrl },
        {
          headers: {
            "Content-Type": "application/json",
            "x-admin-password": passwordRef.current.value.trim(),
          },
        }
      );

      setStatus("Image uploaded successfully!");
      setFile(null);
      setPreview(null);
      passwordRef.current.value = "";
    } catch (err) {
      console.error(err);
      setStatus("Upload failed. Please check your password and try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-primary-500', 'bg-primary-50');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-primary-500', 'bg-primary-50');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-primary-500', 'bg-primary-50');
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const event = { target: { files: [droppedFile] } };
      onFileChange(event);
    }
  };

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
              <Upload className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Image</h2>
            <p className="text-gray-600">Add new images to your gallery</p>
          </div>

          {/* Upload Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Image
              </label>
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
                  file 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 hover:border-primary-400 hover:bg-primary-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  disabled={uploading}
                  className="hidden"
                />
                
                {preview ? (
                  <div className="space-y-3">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg mx-auto"
                    />
                    <p className="text-sm text-green-600 font-medium">
                      ✓ {file?.name}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                      <FileImage className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-primary-600">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your admin password"
                  disabled={uploading}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
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

            {/* Upload Button */}
            <button
              type="submit"
              disabled={uploading || !file}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Image
                </>
              )}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl flex items-center justify-between ${
                status.includes("successfully")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              <div className="flex items-center">
                {status.includes("successfully") ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                <span className="text-sm">{status}</span>
              </div>
              <button
                onClick={() => setStatus("")}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Back to Gallery Link */}
          <div className="mt-6 text-center">
            <a
              href="/admin-gallery"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Gallery
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
