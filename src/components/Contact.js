import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Users,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "temaandfriends@gmail.com",
      link: "mailto:temaandfriends@gmail.com",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (770) 310-2212",
      link: "tel:+17703102212",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "353 Lobdale Falls Drive, Lawrenceville, GA 30045, USA",
      link: null,
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      link: null,
      color: "from-orange-500 to-red-500"
    }
  ];

  const quickLinks = [
    {
      icon: Users,
      title: "Become a Member",
      description: "Join our community and make a difference",
      link: "#about"
    },
    {
      icon: Globe,
      title: "Volunteer",
      description: "Get involved in our community projects",
      link: "#projects"
    },
    {
      icon: MessageCircle,
      title: "Partnership",
      description: "Explore collaboration opportunities",
      link: "#contact"
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's Connect
            <span className="block text-primary-600">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We'd love to hear from you! Contact <strong>Tema and Friends Association of Georgia</strong> for 
            sponsorships, partnerships, or general inquiries.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${info.color} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.details}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
                
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.title}
                      href={link.link}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                    >
                      <link.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-200" />
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-sm text-white/80">{link.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or partner with us, we're here to help you get started on your journey to making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:temaandfriends@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="#donate"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Donate Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
