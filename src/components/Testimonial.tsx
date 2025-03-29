import { motion } from 'framer-motion'
import React from 'react'

function Testimonial() {
  return (
    <div>
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
                color: "bg-gradient-to-br from-[#023e8a]/20 to-[#0077b6]/20",
                quote: "EntreConnect's AI matched me with the perfect mentor who helped us secure our first round of funding within 3 months."
              },
              {
                name: "Michael Rodriguez",
                company: "EcoShip Logistics",
                color: "bg-gradient-to-br from-[#023e8a]/20 to-[#0077b6]/20",
                quote: "The Smart Knowledge Hub saved us countless hours of research and gave us insights we would have never discovered on our own."
              },
              {
                name: "Priya Sharma",
                company: "FinEase",
                color: "bg-gradient-to-br from-[#023e8a]/20 to-[#0077b6]/20",
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
                <div className="mb-4 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color}`}></div>
                  
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <h5 className="text-[#0096c7]">{testimonial.company}</h5>
                    <p className="text-blue-300">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Testimonial