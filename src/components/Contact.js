import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: "60px 20px",
        backgroundColor: "#eef2f7",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#1f2937",
          }}
        >
          Get in Touch
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.6",
            marginBottom: "2.5rem",
            color: "#4b5563",
          }}
        >
          We'd love to hear from you! Contact{" "}
          <strong>Tema and Friends Association of Georgia</strong> for
          sponsorships, partnerships, or general inquiries.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#fff",
            padding: "1.8rem 2rem",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            maxWidth: "450px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <p style={{ marginBottom: "1rem", fontSize: "1rem" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:temaandfriends@gmail.com"
              style={{
                color: "#0ea5e9",
                textDecoration: "none",
              }}
            >
              temaandfriends@gmail.com
            </a>
          </p>

          <p style={{ marginBottom: "1rem", fontSize: "1rem" }}>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+17703102212"
              style={{
                color: "#0ea5e9",
                textDecoration: "none",
              }}
            >
              +1 (770) 310-2212
            </a>
          </p>

          <p style={{ fontSize: "1rem" }}>
            <strong>Mailing Address:</strong> <br />
            353 Lobdale Falls Drive, <br />
            Lawrenceville, GA 30045, USA
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
