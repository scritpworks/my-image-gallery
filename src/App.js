import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Gallery from "./components/Gallery.js";
import Donate from "./components/Donate.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import AdminUpload from "./components/AdminUpload";
import AdminGallery from "./components/AdminGallery"; // <-- import the admin gallery

function App() {
  useEffect(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin-upload";
        });
        // 👇 Auto-open the widget to show login/register/reset options
        window.netlifyIdentity.open();
      }
    });
    window.netlifyIdentity.init();
  }
}, []);

// Show AdminUpload only on /admin-upload path
if (window.location.pathname === "/admin-upload") {
  return <AdminUpload />;
}

// Show AdminGallery only on /admin-gallery path
if (window.location.pathname === "/admin-gallery") {
  return <AdminGallery />;
}

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '90px' }}>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Donate />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
