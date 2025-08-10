import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  ArrowUp,
  Users,
  Target,
  Award
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    organization: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Gallery", href: "#gallery" }
    ],
    support: [
      { name: "Donate", href: "#donate" },
      { name: "Volunteer", href: "#contact" },
      { name: "Partnership", href: "#contact" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "501(c)(3) Status", href: "#" }
    ]
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/temaandfriends",
      icon: Facebook,
      color: "hover:text-blue-500"
    },
    {
      name: "Website",
      href: "https://temaandfriends.org",
      icon: Globe,
      color: "hover:text-green-500"
    },
    {
      name: "Phone",
      href: "tel:+17703102212",
      icon: Phone,
      color: "hover:text-green-600"
    },
    {
      name: "Email",
      href: "mailto:temaandfriends@gmail.com",
      icon: Mail,
      color: "hover:text-blue-600"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Active Members" },
    { icon: Target, value: "15+", label: "Projects Completed" },
    { icon: Award, value: "10+", label: "Years of Service" },
    { icon: Heart, value: "500+", label: "Lives Impacted" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <div>
                  <h3 className="text-lg font-bold">Tema and Friends</h3>
                  <p className="text-sm text-gray-400">Association of Georgia</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering communities through unity, compassion, and sustainable development. 
                Together, we create lasting positive change.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Organization Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Organization</h4>
              <ul className="space-y-3">
                {footerLinks.organization.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Support Us</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <a href="mailto:temaandfriends@gmail.com" className="hover:text-primary-400 transition-colors duration-200">
                    temaandfriends@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <a href="tel:+17703102212" className="hover:text-primary-400 transition-colors duration-200">
                    +1 (770) 310-2212
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                  <span>353 Lobdale Falls Drive, Lawrenceville, GA 30045, USA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-700 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Tema and Friends Association of Georgia. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by <strong className="text-primary-400">KAYLORMDEVS</strong>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-large hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;
