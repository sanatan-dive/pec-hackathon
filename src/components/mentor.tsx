// app/mentors/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { fetchMentors,  } from '@/data/mentordata';
interface Mentor {
  id: string;
  name: string;
  profileImage: string;
  hourlyRate: number;
  domains: string[];
  bio: string;
  availability: string;
}

export default function MentorsPage() {
  
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const domains = [
    'Business Strategy', 
    'Marketing', 
    'Finance', 
    'Technology', 
    'Product Development',
    'Leadership', 
    'Sales'
  ];

  useEffect(() => {
    const loadMentors = async () => {
      try {
        const data = await fetchMentors();
        setMentors(data);
        setFilteredMentors(data);
      } catch (error) {
        console.error('Failed to fetch mentors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMentors();
  }, []);

  useEffect(() => {
    const filtered = mentors.filter(mentor => {
      const domainMatch = selectedDomain ? mentor.domains.includes(selectedDomain) : true;
      const queryMatch = searchQuery.trim() === '' ? true : 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.domains.some(domain => domain.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return domainMatch && queryMatch;
    });
    
    setFilteredMentors(filtered);
  }, [searchQuery, selectedDomain, mentors]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800">
      
      
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text">
            Find Your Perfect Mentor
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Connect with industry experts who can guide you through your entrepreneurial journey.
            Book a video call and transform your business strategy with personalized advice.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-indigo-900/30 backdrop-blur-md rounded-xl p-6 mb-10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, expertise, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-blue-400/30 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <svg className="absolute right-3 top-3 h-6 w-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="px-4 py-3 rounded-lg bg-indigo-800/50 border border-blue-400/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">All Domains</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-indigo-800/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={mentor.profileImage} 
                      alt={mentor.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                        <span className="bg-cyan-400 text-indigo-900 font-bold px-3 py-1 rounded-full text-sm">
                          ${mentor.hourlyRate}/hr
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentor.domains.map(domain => (
                        <span 
                          key={domain} 
                          className="text-xs bg-indigo-700/50 text-blue-100 px-2 py-1 rounded-full"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-blue-100 mb-4 text-sm line-clamp-3">{mentor.bio}</p>
                    
                    <div className="border-t border-blue-500/20 pt-4 mt-2">
                      <p className="text-sm text-blue-200 mb-3">
                        <span className="font-medium">Availability:</span> {mentor.availability}
                      </p>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-indigo-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30">
                        Book Video Call
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-16 w-16 text-blue-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl text-blue-100 font-medium mt-4">No mentors found</h3>
                <p className="text-blue-200 mt-2">Try adjusting your search criteria</p>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
}