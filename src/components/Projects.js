import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  BookOpen, 
  Utensils, 
  Home, 
  Users, 
  Globe, 
  Target, 
  Award 
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Heart,
      title: "Health Outreach",
      description: "Providing free health screenings and basic medical support to communities with limited access to healthcare.",
      impact: "500+ Lives Impacted",
      location: "Ghana & Georgia",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Distributing learning materials, supporting schools, and helping children stay in school through local and international donations.",
      impact: "200+ Students Helped",
      location: "Multiple Regions",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Delivering essential food items to low-income families and supporting local food banks in Ghana and abroad.",
      impact: "1000+ Meals Provided",
      location: "Community Centers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Home,
      title: "Community Development",
      description: "Supporting clean water projects, housing repairs, and sanitation initiatives in underprivileged neighborhoods.",
      impact: "15+ Projects Completed",
      location: "Rural Communities",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Mentoring programs and skill development workshops to empower young people with practical life skills.",
      impact: "150+ Youth Mentored",
      location: "Urban Centers",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "International Aid",
      description: "Coordinating relief efforts and humanitarian aid to communities affected by natural disasters and crises.",
      impact: "3 Countries Served",
      location: "Global Reach",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
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
            <Target className="w-4 h-4 mr-2" />
            Our Impact Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Making a Difference
            <span className="block text-primary-600">One Project at a Time</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Through our diverse range of initiatives, we're creating lasting positive change in communities 
            both locally and internationally.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Impact Stats */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-2 text-primary-500" />
                    {project.impact}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-2 text-primary-500" />
                    {project.location}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Your support helps us continue these vital projects and expand our impact to reach more communities in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#donate"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
