import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Mail, 
  MapPin, 
  DollarSign, 
  CreditCard, 
  Gift,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Donate = () => {
  const donationMethods = [
    {
      icon: Mail,
      title: "Zelle",
      description: "Send money directly to our email",
      details: "temaandfriends@gmail.com",
      color: "from-green-500 to-emerald-500",
      link: "mailto:temaandfriends@gmail.com"
    },
    {
      icon: CreditCard,
      title: "CashApp",
      description: "Quick and easy mobile payments",
      details: "$temaandfriends",
      color: "from-green-400 to-green-600",
      link: "https://cash.app/$temaandfriends"
    },
    {
      icon: MapPin,
      title: "Mail Check",
      description: "Send checks to our address",
      details: "353 Lobdale Falls Drive, Lawrenceville, GA 30045, USA",
      color: "from-blue-500 to-indigo-500",
      link: null
    }
  ];

  const benefits = [
    "Tax-deductible contributions",
    "Transparent fund allocation",
    "Regular impact reports",
    "Recognition on our website",
    "Direct community impact"
  ];

  return (
    <section id="donate" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30s-30-13.431-30-30 13.431-30 30-30 30 13.431 30 30zm0 0c0-16.569 13.431-30 30-30s30 13.431 30 30-13.431 30-30 30-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Heart className="w-4 h-4 mr-2" />
            Support Our Mission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Make a Difference
            <span className="block text-primary-600">Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Help <strong>Tema and Friends Association of Georgia</strong> continue providing relief, 
            economic support, and hope to underserved communities locally and internationally.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Donation Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Donation Methods</h3>
            
            {donationMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${method.color} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? "_blank" : undefined}
                        rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link"
                      >
                        {method.details}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{method.details}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits & Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Gift className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Your Impact</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">$25</span>
                    <span className="text-sm text-white/80">Provides school supplies for 1 child</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">$50</span>
                    <span className="text-sm text-white/80">Feeds a family for 1 week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">$100</span>
                    <span className="text-sm text-white/80">Supports health outreach program</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90">$250</span>
                    <span className="text-sm text-white/80">Funds community development project</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Donate?</h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tax Info */}
            <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-accent-900 mb-2">Tax-Deductible Donations</h4>
                  <p className="text-accent-700 text-sm">
                    As a 501(c)(3) non-profit organization, your contributions are tax-deductible. 
                    We'll provide receipts for all donations upon request.
                  </p>
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
              Every dollar counts. Your donation directly supports our programs and helps us reach more communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:temaandfriends@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-large transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;
