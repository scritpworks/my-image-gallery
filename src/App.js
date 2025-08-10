import React from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Gallery from "./components/Gallery.js";
import Donate from "./components/Donate.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import AdminUpload from "./components/AdminUpload";
import AdminGallery from "./components/AdminGallery"; 

function App() {
  if (window.location.pathname === "/admin-upload") {
    return <AdminUpload />;
  }

  if (window.location.pathname === "/admin-gallery") {
    return <AdminGallery />;
  }

  return (
    <>
      <Navbar />
      <main>
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
