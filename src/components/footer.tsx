import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#03045e] border-t border-[#0077b6]/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00b4d8]">EntreConnect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#caf0f8] hover:text-white">About Us</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Our Mission</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Careers</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00b4d8]">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#caf0f8] hover:text-white">AI Mentor Matching</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Knowledge Hub</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Roadmap Generator</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Expert Consultation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00b4d8]">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Blog</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Guides</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Events</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#00b4d8]">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-[#caf0f8] hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#0077b6]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-[#caf0f8]">© 2025 EntreConnect. All rights reserved.</div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#023e8a] flex items-center justify-center hover:bg-[#0077b6] transition-colors">
                <span className="sr-only">Twitter</span>
                {/* Icon placeholder */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#023e8a] flex items-center justify-center hover:bg-[#0077b6] transition-colors">
                <span className="sr-only">LinkedIn</span>
                {/* Icon placeholder */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#023e8a] flex items-center justify-center hover:bg-[#0077b6] transition-colors">
                <span className="sr-only">Facebook</span>
                {/* Icon placeholder */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#023e8a] flex items-center justify-center hover:bg-[#0077b6] transition-colors">
                <span className="sr-only">Instagram</span>
                {/* Icon placeholder */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer