import React, { useState, useRef } from "react";
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
  const passwordRef = useRef(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Optional: Validate file size (e.g., max 5MB)
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

      const res = await axios.post(
        "/.netlify/functions/upload-image",
        { data: dataUrl },
        {
          headers: {
            "Content-Type": "application/json",
            "x-admin-password": passwordRef.current.value.trim(),
          },
        }
      );

      setStatus(`✅ Uploaded successfully!`);
      setFile(null);
      setPreview(null);
      passwordRef.current.value = "";
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 420,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        border: "1px solid #e5e7eb",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 18, color: "#0ea5e9" }}>
        Admin – Upload Image
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput" style={{ fontWeight: 500 }}>
          Select Image:
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          disabled={uploading}
          style={{
            display: "block",
            margin: "8px 0 16px 0",
            width: "100%",
            padding: "6px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            background: "#f9fafb",
          }}
        />
        {preview && (
          <div
            style={{
              margin: "10px 0 18px 0",
              width: "100%",
              aspectRatio: "4/3",
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={preview}
              alt="Selected preview"
              style={{
                maxWidth: "100%",
                maxHeight: "180px",
                objectFit: "contain",
                borderRadius: 8,
                background: "#fff",
              }}
            />
          </div>
        )}

        <label htmlFor="adminPassword" style={{ fontWeight: 500 }}>
          Admin Password:
        </label>
        <input
          id="adminPassword"
          type="password"
          ref={passwordRef}
          disabled={uploading}
          required
          style={{
            width: "100%",
            margin: "8px 0 18px 0",
            padding: "6px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            background: "#f9fafb",
          }}
          placeholder="Enter admin password"
        />

        <button
          type="submit"
          disabled={uploading}
          style={{
            width: "100%",
            padding: "10px 0",
            background: uploading ? "#a5b4fc" : "#0ea5e9",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            fontWeight: 600,
            fontSize: "1rem",
            cursor: uploading ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            marginBottom: 8,
          }}
        >
          {uploading ? (
            <span>
              <span
                style={{
                  display: "inline-block",
                  width: 18,
                  height: 18,
                  border: "2px solid #fff",
                  borderTop: "2px solid #0ea5e9",
                  borderRadius: "50%",
                  marginRight: 8,
                  animation: "spin 1s linear infinite",
                  verticalAlign: "middle",
                }}
              />
              Uploading...
            </span>
          ) : (
            "Upload"
          )}
        </button>
      </form>

      <p
        aria-live="polite"
        style={{
          marginTop: 10,
          minHeight: 24,
          color: status.startsWith("✅")
            ? "#059669"
            : status.startsWith("❌")
            ? "#dc2626"
            : "#334155",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {status}
      </p>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
