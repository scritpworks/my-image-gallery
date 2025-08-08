import React from "react";
import { motion } from "framer-motion";
import { Facebook, Globe, Phone } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: "#1e293b",
        color: "#f1f5f9",
        padding: "2.5rem 1rem",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <div style={{ marginBottom: "1.2rem" }}>
        <p style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>
          &copy; {new Date().getFullYear()} Tema and Friends Association of Georgia
        </p>
        <p style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>
          Powered by <strong>KAYLORMDEVS</strong>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <a
          href="https://facebook.com/temaandfriends"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f1f5f9", transition: "color 0.2s" }}
        >
          <Facebook size={24} />
        </a>

        <a
          href="https://wa.me/7703102212"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f1f5f9", transition: "color 0.2s" }}
        >
          <Phone size={24} />
        </a>

        <a
          href="https://temaandfriends.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f1f5f9", transition: "color 0.2s" }}
        >
          <Globe size={24} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
