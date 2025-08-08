import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          zIndex: 2,
          padding: "0 1rem",
          maxWidth: "800px",
        }}
      >
        <motion.h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            lineHeight: "1.2",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span style={{ color: "#ffffff" }}>
            Tema and Friends Association of Georgia
          </span>
        </motion.h1>

        <motion.p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "#d1d5db",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Serving our families, friends and community.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#donate"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0ea5e9",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Donate Now
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "transparent",
              border: "2px solid #0ea5e9",
              color: "#0ea5e9",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Join the Mission
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
