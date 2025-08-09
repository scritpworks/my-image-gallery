import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      className={`navbar ${menuOpen ? "open" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={logo} alt="Logo" />
          <span>Tema and Friends Association of Georgia</span>
        </motion.div>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <AnimatePresence>
            {["About", "Projects", "Gallery", "Donate", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}

            {/* 👇 Admin Login Link */}
            <motion.a
              href="/admin-gallery"
              className="login-button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              style={{
                display: "inline-block",
                padding: "8px 14px",
                background: "#0ea5e9",
                color: "#fff",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Admin Login
            </motion.a>
          </AnimatePresence>
        </nav>

        <motion.div
          className="navbar-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.85 }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
