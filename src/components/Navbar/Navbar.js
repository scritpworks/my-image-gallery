import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>
                Tema and Friends
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-white/80 drop-shadow-lg'
              }`}>
                Association of Georgia
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-primary-500' : 'bg-white'
                }`}></span>
              </motion.a>
            ))}
            
            {/* Admin Login Button */}
            <motion.a
              href="/admin-gallery"
              className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Heart className="w-4 h-4 mr-2" />
              Admin
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/20 text-white'
            }`}
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 shadow-large border ${
                scrolled 
                  ? 'bg-white/95 backdrop-blur-md border-gray-100' 
                  : 'bg-black/80 backdrop-blur-md border-white/20'
              }`}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50' 
                        : 'text-white hover:text-primary-300 hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="/admin-gallery"
                  className={`block px-3 py-2 mt-2 rounded-md font-semibold text-center ${
                    scrolled 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' 
                      : 'bg-white/20 text-white border border-white/30'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <Heart className="w-4 h-4 inline mr-2" />
                  Admin Login
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
