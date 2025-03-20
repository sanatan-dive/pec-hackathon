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

    <div className="bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6] min-h-screen text-white">
  
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
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Startup Journey
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-[#caf0f8] mb-8"
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
                className="bg-gradient-to-r from-[#0096c7] to-[#00b4d8] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-[#00b4d8]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-[#90e0ef] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0077b6]/30"
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
              className="relative w-full h-96 bg-gradient-to-r from-[#0077b6]/20 to-[#0096c7]/20 rounded-2xl p-1"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-[#03045e]/80 rounded-2xl overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <motion.div
                    className="relative w-5/6 h-5/6 rounded-xl overflow-hidden border border-[#0096c7]/30 shadow-xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-12 bg-[#023e8a] flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-sm text-[#90e0ef]">EntreConnect Dashboard</div>
                    </div>
                    <div className="pt-12 h-full bg-[#03045e] p-4">
                      <motion.div
                        className="bg-[#023e8a]/50 h-16 rounded mb-4 w-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      ></motion.div>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          className="bg-[#0077b6]/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-[#0096c7]/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-[#00b4d8]/30 h-24 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="bg-[#90e0ef]/30 h-24 rounded"
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
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#00b4d8]"
                animate={{ 
                  boxShadow: ["0 0 20px 5px rgba(0, 180, 216, 0.3)", "0 0 20px 10px rgba(0, 180, 216, 0.6)", "0 0 20px 5px rgba(0, 180, 216, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#0096c7]"
                animate={{ 
                  boxShadow: ["0 0 20px 5px rgba(0, 150, 199, 0.3)", "0 0 20px 10px rgba(0, 150, 199, 0.6)", "0 0 20px 5px rgba(0, 150, 199, 0.3)"]
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]">
                AI-Powered Features
              </span> for Startup Success
            </motion.h2>
            <motion.p 
              className="text-xl text-[#caf0f8] max-w-2xl mx-auto"
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
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${currentFeature === index ? 'bg-gradient-to-r from-[#023e8a]/50 to-[#0077b6]/50 border border-[#0096c7]/30' : 'hover:bg-[#0077b6]/20'}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-r from-[#0096c7]/20 to-[#00b4d8]/20 text-[#90e0ef]"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-[#caf0f8]">{feature.description}</p>
                    </div>
                    {currentFeature === index && (
                      <motion.div 
                        className="ml-auto text-[#00b4d8]"
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
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#023e8a]/30 to-[#0077b6]/30 border border-[#0096c7]/20">
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
                    <div className="w-full max-w-md bg-[#03045e]/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#00b4d8]">AI Mentor Matching</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-[#023e8a]"
                            animate={{ 
                              boxShadow: ["0 0 0px rgba(2, 62, 138, 0)", "0 0 20px rgba(2, 62, 138, 0.6)", "0 0 0px rgba(2, 62, 138, 0)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                          <div className="flex-1">
                            <div className="h-4 w-40 bg-[#0077b6] rounded-full"></div>
                            <div className="h-3 w-24 bg-[#0077b6]/60 rounded-full mt-2"></div>
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
                          <div className="w-12 h-12 rounded-full bg-[#0096c7]"></div>
                          <div className="flex-1">
                            <div className="h-4 w-36 bg-[#0096c7] rounded-full"></div>
                            <div className="h-3 w-28 bg-[#0096c7]/60 rounded-full mt-2"></div>
                          </div>
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                            87% Match
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#00b4d8]"></div>
                          <div className="flex-1">
                            <div className="h-4 w-32 bg-[#00b4d8] rounded-full"></div>
                            <div className="h-3 w-20 bg-[#00b4d8]/60 rounded-full mt-2"></div>
                          </div>
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                            75% Match
                          </div>
                        </div>
                        
                        <motion.button
                          className="w-full py-2 mt-4 bg-gradient-to-r from-[#0096c7] to-[#00b4d8] rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Connect Now
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 1 && (
                    <div className="w-full max-w-md bg-[#03045e]/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#00b4d8]">Smart Knowledge Hub</h4>
                      <div className="space-y-3">
                        <motion.div 
                          className="p-3 bg-[#023e8a]/40 rounded-lg border-l-4 border-[#0096c7]"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="h-4 w-3/4 bg-[#0077b6]/50 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-[#0077b6]/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div 
                          className="p-3 bg-[#0077b6]/40 rounded-lg border-l-4 border-[#00b4d8]"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="h-4 w-5/6 bg-[#0096c7]/50 rounded-full"></div>
                          <div className="h-3 w-2/3 bg-[#0096c7]/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div 
                          className="p-3 bg-[#0096c7]/40 rounded-lg border-l-4 border-[#90e0ef]"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="h-4 w-2/3 bg-[#00b4d8]/50 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-[#00b4d8]/30 rounded-full mt-2"></div>
                        </motion.div>
                        
                        <motion.div
                          className="mt-4 h-24 rounded-lg bg-gradient-to-r from-[#023e8a]/30 to-[#0077b6]/30"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(2, 62, 138, 0)", "0 0 10px rgba(2, 62, 138, 0.3)", "0 0 0px rgba(2, 62, 138, 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="h-full flex items-center justify-center">
                            <div className="text-[#90e0ef]">AI-Generated Trends</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 2 && (
                    <div className="w-full max-w-md bg-[#03045e]/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#00b4d8]">Startup Roadmap</h4>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00b4d8] to-[#0077b6]"></div>
                          
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div 
                              key={i}
                              className="ml-10 mb-4 relative"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.1 }}
                            >
                              <motion.div 
                                className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] -translate-x-14 flex items-center justify-center"
                                animate={{ scale: i === 0 ? [1, 1.1, 1] : 1 }}
                                transition={{ duration: 1, repeat: i === 0 ? Infinity : 0 }}
                              >
                                {i + 1}
                              </motion.div>
                              <div className="p-3 bg-[#023e8a]/20 rounded-lg border border-[#0096c7]/30">
                                <div className="h-4 w-3/4 bg-[#0077b6]/50 rounded-full"></div>
                                <div className="h-3 w-1/2 bg-[#0077b6]/30 rounded-full mt-2"></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.button
                          className="w-full py-2 mt-2 bg-gradient-to-r from-[#0096c7] to-[#00b4d8] rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Full Roadmap
                        </motion.button>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 3 && (
                    <div className="w-full max-w-md bg-[#03045e]/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#00b4d8]">Real-Time Consultation</h4>
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <motion.div 
                            className="bg-[#0077b6]/30 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="h-3 w-32 bg-[#90e0ef]/40 rounded-full"></div>
                            <div className="h-3 w-40 bg-[#90e0ef]/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <div className="flex">
                          <motion.div 
                            className="bg-[#0096c7]/20 rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                          >
                            <div className="h-3 w-36 bg-[#caf0f8]/40 rounded-full"></div>
                            <div className="h-3 w-44 bg-[#caf0f8]/40 rounded-full mt-1"></div>
                            <div className="h-3 w-28 bg-[#caf0f8]/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <div className="flex justify-end">
                          <motion.div 
                            className="bg-[#0077b6]/30 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 max-w-xs"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                          >
                            <div className="h-3 w-24 bg-[#90e0ef]/40 rounded-full"></div>
                            <div className="h-3 w-36 bg-[#90e0ef]/40 rounded-full mt-1"></div>
                          </motion.div>
                        </div>
                        
                        <motion.div 
                          className="bg-[#023e8a] rounded-lg p-2 flex items-center mt-4"
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(0, 150, 199, 0)", "0 0 10px rgba(0, 150, 199, 0.2)", "0 0 0px rgba(0, 150, 199, 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="flex-1 h-8 bg-[#0077b6]/50 rounded-lg"></div>
                          <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0096c7] flex items-center justify-center">
                            <FaArrowRight size={14} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  
                  {currentFeature === 4 && (
                    <div className="w-full max-w-md bg-[#03045e]/80 p-6 rounded-xl backdrop-blur-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#00b4d8]">Startup Health Dashboard</h4>
                      <div className="space-y-4">
                        <div className="h-40 bg-[#023e8a]/50 rounded-lg p-4 relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 flex">
                            <motion.div 
                              className="h-full w-4 bg-[#0077b6] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "60%" }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#0096c7] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "80%" }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#00b4d8] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "40%" }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#90e0ef] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "75%" }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#0077b6] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "50%" }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#0096c7] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "65%" }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>
                            <motion.div 
                              className="h-full w-4 bg-[#00b4d8] mx-1"
                              initial={{ height: 0 }}
                              animate={{ height: "70%" }}
                              transition={{ duration: 0.8, delay: 0.7 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <motion.div 
                            className="bg-[#023e8a]/20 p-3 rounded-lg border border-[#0077b6]/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-4 w-16 bg-[#0077b6]/50 rounded-full"></div>
                            <div className="h-8 w-24 bg-[#0077b6]/30 rounded-full mt-2 text-center text-sm flex items-center justify-center">
                              +24%
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-[#0077b6]/20 p-3 rounded-lg border border-[#0096c7]/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-4 w-16 bg-[#0096c7]/50 rounded-full"></div>
                            <div className="h-8 w-24 bg-[#0096c7]/30 rounded-full mt-2 text-center text-sm flex items-center justify-center">
                              $42.5K
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-[#0096c7]/20 p-3 rounded-lg border border-[#00b4d8]/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-4 w-16 bg-[#00b4d8]/50 rounded-full"></div>
                            <div className="h-8 w-24 bg-[#00b4d8]/30 rounded-full mt-2 text-center text-sm flex items-center justify-center">
                              85%
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-[#00b4d8]/20 p-3 rounded-lg border border-[#90e0ef]/20"
                            whileHover={{ y: -3 }}
                          >
                            <div className="h-4 w-16 bg-[#90e0ef]/50 rounded-full"></div>
                            <div className="h-8 w-24 bg-[#90e0ef]/30 rounded-full mt-2 text-center text-sm flex items-center justify-center">
                              12 Days
                            </div>
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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]">
                Innovative Founders
              </span>
            </h2>
            <p className="text-xl text-[#caf0f8] max-w-2xl mx-auto">
              See how EntreConnect is helping entrepreneurs transform their ideas into successful businesses
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "HealthTech Solutions",
                quote: "EntreConnect's AI matched me with the perfect mentor who helped us secure our first round of funding within 3 months."
              },
              {
                name: "Michael Rodriguez",
                company: "EcoShip Logistics",
                quote: "The Smart Knowledge Hub saved us countless hours of research and gave us insights we would have never discovered on our own."
              },
              {
                name: "Priya Sharma",
                company: "FinEase",
                quote: "From ideation to launch in 6 months - the Startup Roadmap Generator was like having a seasoned co-founder guiding every step."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#023e8a]/20 to-[#0077b6]/20 p-6 rounded-xl border border-[#0096c7]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 150, 199, 0.2)" }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-[#00b4d8]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg mr-1">★</span>
                    ))}
                  </div>
                  <p className="text-[#caf0f8] italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0077b6] to-[#0096c7] mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-[#90e0ef]">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-[#caf0f8] max-w-2xl mx-auto">
              Choose the plan that fits your startup stage
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for idea validation and early-stage planning",
                features: [
                  "Basic AI mentor matching",
                  "Startup templates library",
                  "Community forum access",
                  "Limited roadmap generation"
                ]
              },
              {
                name: "Growth",
                price: "$49",
                description: "For startups ready to accelerate their growth",
                features: [
                  "Advanced AI mentor matching",
                  "Full knowledge hub access",
                  "Complete roadmap generation",
                  "Monthly expert consultation",
                  "Basic analytics dashboard"
                ],
                popular: true
              },
              {
                name: "Scale",
                price: "$149",
                description: "For startups seeking funding and rapid expansion",
                features: [
                  "Priority AI mentor matching",
                  "Custom roadmap with milestones",
                  "Weekly expert consultations",
                  "Advanced analytics dashboard",
                  "Investor pitch preparation",
                  "Funding opportunity alerts"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br from-[#023e8a]/30 to-[#0077b6]/30 rounded-xl border border-[#0096c7]/30 overflow-hidden ${plan.popular ? 'relative z-10 md:-mt-4 md:mb-4' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 150, 199, 0.3)" }}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-center py-1 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-[#90e0ef] ml-2">/month</span>}
                  </div>
                  <p className="text-[#caf0f8] mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-[#00b4d8] mr-2 mt-1">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`w-full py-3 rounded-lg font-bold ${
                      plan.popular 
                        ? "bg-gradient-to-r from-[#0096c7] to-[#00b4d8] text-white" 
                        : "bg-[#023e8a]/50 border border-[#0096c7]/50 text-white"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                  </motion.button>
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
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#023e8a] to-[#0077b6] rounded-2xl p-1">
            <div className="bg-gradient-to-br from-[#03045e]/90 to-[#023e8a]/90 rounded-2xl p-8 md:p-12 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]">
                  Transform
                </span> Your Startup Journey?
              </motion.h2>
              <motion.p 
                className="text-xl text-[#caf0f8] mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Join thousands of founders who are building successful startups with AI-powered guidance.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-[#0096c7] to-[#00b4d8] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-[#00b4d8]/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="bg-transparent border-2 border-[#90e0ef] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0077b6]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

      </main>
      
      {/* Footer */}
      
    </div>
  );
}