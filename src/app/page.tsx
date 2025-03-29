// pages/index.js
'use client';


import {motion} from 'framer-motion';

import Link from 'next/link';
import Features from '@/components/Features';
import Testimonial from '@/components/Testimonial';


export default function Home() {
 

  return (

    <div className="bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6] min-h-screen text-white">
  
      
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
              Start Your <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Entrepreneurship Journey Today
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
     <Features/>
        
        {/* Testimonials Section */}
      <Testimonial/>
        
        
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
                
                <Link href="/investors">
                <motion.button
                  className="bg-transparent border-2 border-[#90e0ef] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0077b6]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      

      
    </div>
  );
}