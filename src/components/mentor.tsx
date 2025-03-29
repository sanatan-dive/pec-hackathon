'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Image from 'next/image';
import {  useUser } from '@clerk/nextjs';

// Define Mentor Type
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const  { user } = useUser();

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
      setIsLoading(true);
      try {
        const response = await fetch('/api/mentors');
        if (!response.ok) throw new Error('Failed to fetch mentors');

        const data: Mentor[] = await response.json();
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

  const handleBookClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = async () => {
    if (!selectedMentor || !selectedTime) return;

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mentorId: selectedMentor.id,
          time: selectedTime,
          userId: user?.id, 
        }),
      });

      if (response.ok) {
        alert('Booking successful!');
        setIsModalOpen(false);
        setSelectedTime('');
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking:', error);
      alert('An error occurred.');
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
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-indigo-900/30 backdrop-blur-md rounded-xl p-6 mb-10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by name, expertise, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-indigo-800/50 border border-blue-400/30 text-white"
            />
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="px-4 py-3 rounded-lg bg-indigo-800/50 border border-blue-400/30 text-white"
            >
              <option value="">All Domains</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Mentors List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <div key={mentor.id} className="bg-indigo-800/20 p-4 rounded-xl">
                  <Image
                    src={mentor.profileImage} 
                    alt={mentor.name} 
                    width={1920}
                    height={1080}
                    className="w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mt-4">{mentor.name}</h3>
                  <p className="text-blue-100 text-sm">{mentor.bio}</p>
                  <button
                    onClick={() => handleBookClick(mentor)}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-indigo-900 font-bold py-3 px-4 rounded-lg mt-4"
                  >
                    Book Video Call
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No mentors found.</p>
            )}
          </div>
        )}

        {/* Booking Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="bg-indigo-900 p-6 rounded-lg max-w-md mx-auto mt-20 text-white" overlayClassName="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center">
          {selectedMentor && (
            <>
              <h2 className="text-2xl font-bold mb-4">Book with {selectedMentor.name}</h2>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 mb-4 bg-indigo-800 rounded text-white"
              >
                <option value="">Select a time</option>
                {selectedMentor.availability.split(',').map((time) => (
                  <option key={time} value={time.trim()}>{time.trim()}</option>
                ))}
              </select>
              <button onClick={handleBookingSubmit} className="w-full bg-cyan-400 text-indigo-900 font-bold py-2 rounded">Confirm Booking</button>
            </>
          )}
        </Modal>
      </main>
    </div>
  );
}
