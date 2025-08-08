import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Health Outreach",
      description:
        "Providing free health screenings and basic medical support to communities with limited access to healthcare.",
    },
    {
      title: "Education Support",
      description:
        "Distributing learning materials, supporting schools, and helping children stay in school through local and international donations.",
    },
    {
      title: "Feeding Programs",
      description:
        "Delivering essential food items to low-income families and supporting local food banks in Ghana and abroad.",
    },
    {
      title: "Community Development",
      description:
        "Supporting clean water projects, housing repairs, and sanitation initiatives in underprivileged neighborhoods.",
    },
  ];

  return (
    <section id="projects" style={{ padding: "60px 20px", background: "#f0f4f8" }}>
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
          Our Projects
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.7rem", color: "#333" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
