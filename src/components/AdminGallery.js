import React, { useState } from "react";
import axios from "axios";

export default function AdminGallery() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImages = async (adminPassword) => {
    setLoading(true);
    setStatus("");
    try {
      const res = await axios.get("/.netlify/functions/list-images", {
        headers: { "x-admin-password": adminPassword }
      });
      setImages(res.data);
      setAuthed(true);
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
    if (!window.confirm("Delete this image?")) return;
    setStatus("Deleting...");
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
      setStatus("Deleted.");
    } catch (err) {
      setStatus("Delete failed.");
    }
  };

  if (!authed) {
    return (
      <div style={{ maxWidth: 340, margin: "60px auto", padding: 24, background: "#fff", borderRadius: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2 style={{ textAlign: "center", color: "#0ea5e9" }}>Admin Gallery Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, margin: "18px 0", borderRadius: 6, border: "1px solid #d1d5db" }}
            disabled={loading}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 0",
              background: "#0ea5e9",
              color: "#fff",
              border: "none",
              borderRadius: 7,
              fontWeight: 600,
              fontSize: "1rem",
              cursor: loading ? "not-allowed" : "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
        <p style={{ color: "#dc2626", minHeight: 24, textAlign: "center" }}>{status}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 24 }}>
      <h2 style={{ textAlign: "center", color: "#0ea5e9" }}>Admin Gallery</h2>
      <button
        onClick={() => { setAuthed(false); setPassword(""); setImages([]); }}
        style={{ float: "right", marginBottom: 10, background: "#f3f4f6", border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer" }}
      >
        Logout
      </button>
      <a
        href="/admin-upload"
        style={{
          display: "inline-block",
          background: "#0ea5e9",
          color: "#fff",
          textDecoration: "none",
          padding: "8px 14px",
          borderRadius: 8,
          fontWeight: 600,
          marginBottom: 12,
        }}
      >
        ➕ Upload Image
      </a>
      <div style={{ clear: "both" }} />
      {status && <p style={{ color: "#059669", textAlign: "center" }}>{status}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.2rem",
          marginTop: 20,
        }}
      >
        {images.length === 0 && <p>No images found.</p>}
        {images.map((img) => (
          <div
            key={img.public_id}
            style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={img.url}
              alt={img.public_id}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 8,
                background: "#f3f4f6",
              }}
            />
            <button
              onClick={() => handleDelete(img.public_id)}
              style={{
                background: "#dc2626",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "6px 14px",
                fontWeight: 500,
                cursor: "pointer",
                marginTop: 4,
                width: "90%",
                transition: "background 0.2s",
              }}
              title="Delete this image"
            >
              🗑 Delete
            </button>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 6, wordBreak: "break-all", textAlign: "center" }}>
              {img.public_id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
