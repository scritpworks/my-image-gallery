import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]); 
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/list-images"); 
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setImages(data.map(img => img.url));  
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error loading gallery: {error}</p>;

  return (
    <>
      <section id="gallery" style={{ padding: "60px 20px", background: "#fafafa" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}
          >
            Gallery
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                  cursor: "pointer",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "180px",
                  maxWidth: "260px", 
                  margin: "0 auto",
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.13)" }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    transition: "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    display: "block",
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={showPrev}
            style={{
              position: "absolute",
              left: "3%",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Full view ${currentIndex + 1}`}
            style={{
              maxWidth: "92vw",
              maxHeight: "85vh",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              background: "#fff",
            }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={showNext}
            style={{
              position: "absolute",
              right: "3%",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "3%",
              right: "3%",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
