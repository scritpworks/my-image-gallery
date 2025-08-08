import React from "react";
import { motion } from "framer-motion";

const Donate = () => {
  return (
    <motion.section
      id="donate"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9fafb",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        style={{ maxWidth: "750px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            marginBottom: "1rem",
            color: "#1f2937",
          }}
        >
          Support Our Mission
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            marginBottom: "2.5rem",
            color: "#4b5563",
          }}
        >
          Help <strong>Tema and Friends Association of Georgia</strong> continue
          providing relief, economic support, and hope to underserved communities
          locally and internationally. Every contribution brings us closer to a
          brighter future.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontSize: "1.4rem",
              textAlign: "center",
              marginBottom: "0.5rem",
              color: "#111827",
            }}
          >
            Donation Channels
          </h3>

          <p>
            <strong>🏠 For Sponsorship & Cheques:</strong> <br />
            353 Lobdale Falls Drive, Lawrenceville, GA 30045, USA
          </p>

          <p>
            <strong>💸 Zelle:</strong>{" "}
            <a
              href="mailto:temaandfriends@gmail.com"
              style={{ color: "#0ea5e9", textDecoration: "none" }}
            >
              temaandfriends@gmail.com
            </a>
          </p>

          <p>
            <strong>💵 CashApp:</strong>{" "}
            <a
              href="https://cash.app/$temaandfriends"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0ea5e9", textDecoration: "none" }}
            >
              temaandfriends@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Donate;
