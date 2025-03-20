// pages/index.js
'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaBrain, FaChartLine, FaUsers, FaRegLightbulb, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    {
      icon: <FaBrain size={40} />,
      title: "AI-Powered Mentor Matching",
      description: "Connect with the perfect mentors and industry experts based on your unique startup needs."
    },
    {
      icon: <FaRegLightbulb size={40} />,
      title: "Smart Knowledge Hub",
      description: "Access AI-curated playbooks, guides, and personalized content to accelerate your growth."
    },
    {
      icon: <FaRocket size={40} />,
      title: "Startup Roadmap Generator",
      description: "Get step-by-step guidance, business plan templates, and funding recommendations."
    },
    {
      icon: <FaUsers size={40} />,
      title: "Real-Time Consultation",
      description: "Engage in expert Q&A sessions, community discussions, and AI-moderated events."
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Startup Health Dashboard",
      description: "Track your progress with AI-powered financial projections and growth analytics."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 min-h-screen text-white">
      <Head>
        <title>EntreConnect | AI-Powered Startup Growth Platform</title>
        <meta name="description" content="Supercharge your startup journey with AI-powered mentorship, expert connections, and growth guidance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Supercharge Your <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Startup Journey
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI-powered mentorship, expert connections, and growth guidance tailored to your unique entrepreneurial path.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-blue-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-1"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <motion.div
                    className="relative w-5/6 h-5/6 rounded-xl overflow-hidden border border-blue-500/30 shadow-xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-sm text-gray-400">EntreConnect Dashboard</div>
                    </div>
                    <div className="pt-12 h-full bg-gray-900 p-4">
                      <motion.div
                        className="bg-gray-800/50 h-16 rounded mb-4 w-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      ></motion.div>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          className="bg-blue-900/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-purple-900/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-cyan-900/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-emerald-900/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.6, duration: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Animated glowing dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan-500"
                animate={{ 
                  boxShadow: ["0 0 20px 5px rgba(6, 182, 212, 0.3)", "0 0 20px 10px rgba(6, 182, 212, 0.6)", "0 0 20px 5px rgba(6, 182, 212, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-emerald-500"
                animate={{ 
                  boxShadow: ["0 0 20px 5px rgba(16, 185, 129, 0.3)", "0 0 20px 10px rgba(16, 185, 129, 0.6)", "0 0 20px 5px rgba(16, 185, 129, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                AI-Powered Features
              </span> for Startup Success
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Everything you need to accelerate your startup journey in one platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${currentFeature === index ? 'bg-gradient-to-r from-blue-800/50 to-purple-800/50 border border-blue-500/30' : 'hover:bg-blue-900/20'}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-blue-200">{feature.description}</p>
                    </div>
                    {currentFeature === index && (
                      <motion.div 
                        className="ml-auto text-cyan-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentFeature === 0 && (
                    <div className="w-full max-w-md bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-cyan-400">AI Mentor Matching</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-blue-800"
                            animate={{ 
                              boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.6)", "0 0 0px rgba(37, 99, 235, 0)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                          <div className="flex-1">
                            <div className="h-4 w-40 bg-blue-800 rounded-full"></div>
                            <div className="h-3 w-24 bg-blue-800/60 rounded-full mt-2"></div>
                          </div>
                          <motion.div 
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            95% Match
                          </motion.div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-purple-800"></div>
                          <div className="flex-1">
                            <div className="h-4 w-36 bg-purple-800 rounded-full"></div>
                            <div className="h-3 w-28 bg-purple-800/60 rounded-full mt-2"></div>
                          </div>
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                            87% Match
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-cyan-800"></div>
                          <div className="flex-1">
                            <div className="h-4 w-32 bg-cyan-800 rounded-full"></div>
                            <div className="h-3 w-20 bg-cyan-800/60 rounded-full mt-2"></div>
                          </div>
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                            75% Match
                          </div>
                        </div>
                        
                        <motion.button
                          className="w-full py-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Connect Now
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 1 && (
                    <div className="w-full max-w-md bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-cyan-400">Smart Knowledge Hub</h4>
                      <div className="space-y-3">
                        <motion.div 
                          className="p-3 bg-blue-900/40 rounded-lg border-l-4 border-blue-500"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="h-4 w-3/4 bg-blue-700/50 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-blue-700/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div 
                          className="p-3 bg-purple-900/40 rounded-lg border-l-4 border-purple-500"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="h-4 w-5/6 bg-purple-700/50 rounded-full"></div>
                          <div className="h-3 w-2/3 bg-purple-700/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div 
                          className="p-3 bg-cyan-900/40 rounded-lg border-l-4 border-cyan-500"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="h-4 w-2/3 bg-cyan-700/50 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-cyan-700/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div
                          className="mt-4 h-24 rounded-lg bg-gradient-to-r from-blue-800/30 to-purple-800/30"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 10px rgba(37, 99, 235, 0.3)", "0 0 0px rgba(37, 99, 235, 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="h-full flex items-center justify-center">
                            <div className="text-blue-300">AI-Generated Trends</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 2 && (
                    <div className="w-full max-w-md bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-cyan-400">Startup Roadmap</h4>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                          
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div 
                              key={i}
                              className="ml-10 mb-4 relative"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.1 }}
                            >
                              <motion.div 
                                className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 -translate-x-14 flex items-center justify-center"
                                animate={{ scale: i === 0 ? [1, 1.1, 1] : 1 }}
                                transition={{ duration: 1, repeat: i === 0 ? Infinity : 0 }}
                              >
                                {i + 1}
                              </motion.div>
                              <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                                <div className="h-4 w-3/4 bg-blue-700/50 rounded-full"></div>
                                <div className="h-3 w-1/2 bg-blue-700/30 rounded-full mt-2"></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.button
                          className="w-full py-2 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Full Roadmap
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 3 && (
                    <div className="w-full max-w-md bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-cyan-400">Real-Time Consultation</h4>
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <motion.div 
                            className="bg-blue-600/30 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="h-3 w-32 bg-blue-400/40 rounded-full"></div>
                            <div className="h-3 w-40 bg-blue-400/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <div className="flex">
                          <motion.div 
                            className="bg-cyan-600/20 rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                          >
                            <div className="h-3 w-36 bg-cyan-400/40 rounded-full"></div>
                            <div className="h-3 w-44 bg-cyan-400/40 rounded-full mt-1"></div>
                            <div className="h-3 w-28 bg-cyan-400/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <div className="flex justify-end">
                          <motion.div 
                            className="bg-blue-600/30 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                          >
                            <div className="h-3 w-24 bg-blue-400/40 rounded-full"></div>
                            <div className="h-3 w-36 bg-blue-400/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <motion.div 
                          className="bg-gray-800 rounded-lg p-2 flex items-center mt-4"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 10px rgba(37, 99, 235, 0.2)", "0 0 0px rgba(37, 99, 235, 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="flex-1 h-8 bg-gray-700/50 rounded-lg"></div>
                          <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <FaArrowRight size={14} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 4 && (
                    <div className="w-full max-w-md bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-cyan-400">Startup Health Dashboard</h4>
                      <div className="space-y-4">
                        <div className="h-40 bg-gray-800/50 rounded-lg p-4 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 flex">
                            <motion.div 
                              className="h-full w-4 bg-blue-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "60%" }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-cyan-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "80%" }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-purple-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "40%" }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-emerald-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "75%" }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-blue-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "50%" }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-cyan-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "65%" }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-purple-500 mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "70%" }}
                              transition={{ duration: 0.8, delay: 0.7 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <motion.div 
                            className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-3 w-16 bg-blue-700/40 rounded-full"></div>
                            <div className="h-5 w-12 bg-blue-700/60 rounded-full mt-2"></div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-3 w-16 bg-purple-700/40 rounded-full"></div>
                            <div className="h-5 w-12 bg-purple-700/60 rounded-full mt-2"></div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-3 w-16 bg-cyan-700/40 rounded-full"></div>
                            <div className="h-5 w-12 bg-cyan-700/60 rounded-full mt-2"></div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-3 w-16 bg-emerald-700/40 rounded-full"></div>
                            <div className="h-5 w-12 bg-emerald-700/60 rounded-full mt-2"></div>
                            </motion.div>
                            <motion.div 
                                className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/20"
                                whileHover={{ y: -3 }}
                            >
                                <div className="h-3 w-16 bg-emerald-700/40 rounded-full"></div>
                                <div className="h-5 w-12 bg-emerald-700/60 rounded-full mt-2"></div>
                            </motion.div>

                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Innovative Founders</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              See how entrepreneurs are accelerating their growth with EntreConnect
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Founder, TechNova",
                content: "EntreConnect paired me with the perfect advisor who helped us secure our Series A funding in half the time we expected. The AI-powered roadmap was a game-changer for our strategy.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Michael Chen",
                title: "CEO, GreenStart",
                content: "The real-time expert consultations saved us months of trial and error. We've grown our customer base by 300% since implementing the strategies from our mentors.",
                color: "from-purple-500 to-blue-500"
              },
              {
                name: "Elena Rodriguez",
                title: "Founder, FinEdge",
                content: "As a solo founder, EntreConnect feels like having a complete advisory board in my pocket. The personalized insights and community support have been invaluable.",
                color: "from-emerald-500 to-cyan-500"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-blue-900/30 p-6 rounded-xl border border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color}`}></div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-300">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-blue-100">{testimonial.content}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            </div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Accelerate</span> Your Startup Journey?
                </motion.h2>
                <motion.p 
                  className="text-xl text-blue-100 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Join thousands of founders who are building faster and smarter with AI-powered guidance.
                </motion.p>
                <motion.ul
                  className="space-y-2 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {[
                    "Free startup assessment and personalized roadmap",
                    "Connect with 3 AI-matched mentors each month",
                    "Access to premium knowledge hub and community",
                    "Cancel anytime, no long-term commitments"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-xs">✓</div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <div className="md:w-1/3">
                <motion.div 
                  className="bg-gray-900/80 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
                >
                  <h3 className="text-xl font-bold mb-4 text-center">Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Free Trial</span> Today</h3>
                  <div className="space-y-4">
                    <div>
                      <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 border border-blue-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-gray-800 border border-blue-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20" />
                    </div>
                    <div>
                      <select className="w-full p-3 rounded-lg bg-gray-800 border border-blue-500/30 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                        <option value="">Startup Stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="mvp">MVP</option>
                        <option value="growth">Growth</option>
                        <option value="scaling">Scaling</option>
                      </select>
                    </div>
                    <motion.button
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-bold text-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get Started Free
                    </motion.button>
                    <p className="text-sm text-center text-blue-200">No credit card required</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EntreConnect</h3>
              <p className="text-blue-200 mb-4">AI-powered mentorship and growth platform for startups at every stage.</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-blue-400 hover:text-cyan-400 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                      <i className={`fab fa-${social}`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Platform",
                links: ["Features", "Pricing", "Testimonials", "For Investors", "For Mentors"]
              },
              {
                title: "Resources",
                links: ["Blog", "Knowledge Hub", "Success Stories", "Events", "Webinars"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]
              }
            ].map((column, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-900/30 text-center text-blue-300">
            <p>© {new Date().getFullYear()} EntreConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}