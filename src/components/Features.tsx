import React, { useEffect, useState } from 'react'
    
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaBrain, FaChartLine, FaUsers, FaRegLightbulb, FaArrowRight } from 'react-icons/fa';

function Features() {
     
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
    <div>   <motion.section 
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
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${currentFeature === index ? 'bg-gradient-to-r from-blue-800/50 to-purple-800/50 border border-blue-500/30' : 'hover:bg-blue-900/20'}`}
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
            </div>
  )
}

export default Features