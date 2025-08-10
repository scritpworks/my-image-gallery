import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Users, Globe, Award, Shield } from "lucide-react";
import logo from "../assets/logo.png";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community Support",
      description: "Supporting the welfare of our members and creating impactful change in communities."
    },
    {
      icon: Target,
      title: "Economic Opportunities",
      description: "Providing economic opportunities and delivering relief to impoverished areas."
    },
    {
      icon: Users,
      title: "Unity & Purpose",
      description: "Uplifting lives through unity and purpose, both locally and internationally."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making a difference in communities across multiple countries and regions."
    },
    {
      icon: Award,
      title: "501(c)(3) Non-Profit",
      description: "Registered non-profit organization with tax-exempt status for contributions."
    },
    {
      icon: Shield,
      title: "Ghana Council Member",
      description: "Proud member of the Ghana Council of Georgia, fostering cultural connections."
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src={logo}
          alt="Background Logo"
          className="w-96 h-96 object-contain"
        />
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
            About Our Organization
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Empowering Communities
            <span className="block text-primary-600">Through Unity & Purpose</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <strong>Tema and Friends Association of Georgia</strong> is committed to supporting the welfare of its members and creating impactful change in communities both locally and internationally.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 mr-3" />
              <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
            </div>
            
            <div className="text-lg lg:text-xl leading-relaxed space-y-4">
              <p>
                The purpose of this association shall be to promote the development of the less privileged in our communities including those in the third world countries by:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Providing economic opportunities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Delivering relief in impoverished areas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Supporting the welfare of our members
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We welcome donations and sponsorships in support of our programs, events, and activities. 
              Contributions are tax-exempt upon request for your tax filing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#donate"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Get Involved
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
