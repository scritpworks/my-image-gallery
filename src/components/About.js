import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "60px 20px",
        background: "#f9f9f9",
        overflow: "hidden",
      }}
    >
      {/* Background Logo */}
      <img
        src={logo}
        alt="Background Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-45%, -45%)",
          opacity: 0.15,
          width: "70%",
          maxWidth: "500px",
          zIndex: 0,
          pointerEvents: "none",
          filter: "brightness(120%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}
        >
          <strong>Tema and Friends Association of Georgia</strong> is committed to supporting the welfare of its members and creating impactful change in communities both locally and internationally. Our goal is to provide economic opportunities, deliver relief to impoverished areas, and uplift lives through unity and purpose.

Tema and Friends Association of Georgia is a <strong>501(c)(3) non-profit organization</strong> and a proud <strong>member of the Ghana Council of Georgia</strong>.

We welcome <strong>donations and sponsorships</strong> in support of our programs, events, and activities. Contributions are <strong>tax-exempt upon request</strong> for your tax filing.

As a gesture of appreciation, we also <strong>promote and advertise our sponsors and donors</strong> on our website and other platforms.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}
        >
          <strong>MISSION STATEMENT:</strong> The purpose of this association shall be:
          To promote the development of the less privileged in our communities including
          those in the third world countries by providing economic opportunities,
          delivering relief in impoverished areas and the welfare of our members.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
