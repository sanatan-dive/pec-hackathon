'use client';
import React, { useState } from 'react';
import Head from 'next/head';

import {  FaVideo, FaComment,  FaInfoCircle, FaCalendar, FaTimes } from 'react-icons/fa';

interface Investor {
  name: string;
  logo: string;
  amount: string;
  joinedDate: string;
  bio?: string;
  specialties?: string[];
}

interface Update {
  date: string;
  title: string;
  content: string;
}

interface FinancialMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface CalendarDay {
  day: number;
  available: boolean;
  hasEvents: boolean;
}

const InvestorsPage: React.FC = () => {
  // State for calendar
  const [currentMonth, setCurrentMonth] = useState<string>("March 2025");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState<string | null>(null);
  const [communicationType, setCommunicationType] = useState<string | null>(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [modalView, setModalView] = useState<'info' | 'booking'>('info');
  
  const keyInvestors: Investor[] = [
    { 
      name: "Sequoia Capital", 
      logo: "/investors/sequoia.svg", 
      amount: "$5M", 
      joinedDate: "Jan 2023",
      bio: "Sequoia Capital is an American venture capital firm. The firm specializes in seed stage, early stage, and growth stage investments in private companies across technology sectors.",
      specialties: ["SaaS", "Enterprise", "AI/ML", "FinTech"]
    },
    { 
      name: "Andreessen Horowitz", 
      logo: "/investors/a16z.svg", 
      amount: "$3.5M", 
      joinedDate: "Feb 2023",
      bio: "Andreessen Horowitz (a16z) is a Silicon Valley-based venture capital firm that backs bold entrepreneurs building the future through technology.",
      specialties: ["Crypto", "Healthcare", "Consumer", "Gaming"]
    },
    { 
      name: "Y Combinator", 
      logo: "/investors/yc.svg", 
      amount: "$2M", 
      joinedDate: "Mar 2022",
      bio: "Y Combinator is an American seed accelerator launched in 2005, providing seed funding, advice, and connections to early-stage startups.",
      specialties: ["Early Stage", "B2B", "B2C", "Developer Tools"]
    },
    { 
      name: "Accel", 
      logo: "/investors/accel.svg", 
      amount: "$4M", 
      joinedDate: "Apr 2023",
      bio: "Accel is a global venture capital firm that partners with exceptional founders with unique insights from inception through all phases of growth.",
      specialties: ["Infrastructure", "Security", "Data", "E-commerce"]
    },
  ];

  const updates: Update[] = [
    {
      date: "Mar 15, 2025",
      title: "Q1 2025 Financial Update",
      content: "We're excited to report 127% YoY growth with positive unit economics across all product lines."
    },
    {
      date: "Feb 1, 2025",
      title: "New Enterprise Product Launch",
      content: "Our enterprise solution is now live with 5 Fortune 500 companies onboarded in the first week."
    },
    {
      date: "Jan 10, 2025",
      title: "Series B Funding Announcement",
      content: "We've secured $15M in Series B funding to accelerate our global expansion plans."
    }
  ];

  const metrics: FinancialMetric[] = [
    { title: "ARR", value: "$12.5M", change: "+127%", isPositive: true },
    { title: "Users", value: "125,000", change: "+85%", isPositive: true },
    { title: "CAC", value: "$105", change: "-18%", isPositive: true },
    { title: "LTV", value: "$2,450", change: "+32%", isPositive: true }
  ];

  // Generate calendar days with some available and some with events
  const generateCalendarDays = (): CalendarDay[] => {
    return Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      available: Math.random() > 0.3, // 70% of days are available
      hasEvents: [5, 10, 15, 21, 25].includes(i + 1) // These days have events
    }));
  };

  const calendarDays = generateCalendarDays();
  
  // Available time slots
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"
  ];

  const handlePrevMonth = () => {
    if (currentMonth === "March 2025") {
      setCurrentMonth("February 2025");
    } else if (currentMonth === "April 2025") {
      setCurrentMonth("March 2025");
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === "February 2025") {
      setCurrentMonth("March 2025");
    } else if (currentMonth === "March 2025") {
      setCurrentMonth("April 2025");
    }
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setSelectedTime(null); // Reset time when day changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleMeetingTypeSelect = (type: string) => {
    setMeetingType(type);
  };

  const handleCommunicationTypeSelect = (type: string) => {
    setCommunicationType(type);
  };

  const handleScheduleMeeting = () => {
    if (selectedDay && selectedTime && meetingType && communicationType) {
      alert(`Meeting scheduled with ${selectedInvestor?.name} for ${currentMonth} ${selectedDay} at ${selectedTime}
Meeting Type: ${meetingType}
Communication: ${communicationType}`);
      
      // Reset selections
      setSelectedDay(null);
      setSelectedTime(null);
      setMeetingType(null);
      setCommunicationType(null);
      setIsModalOpen(false);
    } else {
      alert("Please complete all selections to schedule a meeting");
    }
  };
  
  // New modal-related functions
  const openInvestorModal = (investor: Investor) => {
    setSelectedInvestor(investor);
    setModalView('info');
    setIsModalOpen(true);
    
    // Reset booking selections when opening modal
    setSelectedDay(null);
    setSelectedTime(null);
    setMeetingType(null);
    setCommunicationType(null);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInvestor(null);
    setModalView('info');
  };
  
  const switchToBookingView = () => {
    setModalView('booking');
  };
  
  const switchToInfoView = () => {
    setModalView('info');
  };

  return (
    <>
      <Head>
        <title>Investor Relations | YourCompany</title>
        <meta name="description" content="Investor relations dashboard for YourCompany" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-700">
        {/* Key Investors Section */}
        <section className="py-16 px-4 bg-blue-900/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our <span className="text-cyan-400">Investors</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {keyInvestors.map((investor, index) => (
                <div 
                  key={index} 
                  className="bg-blue-800/40 backdrop-blur-sm p-6 rounded-xl border border-blue-600/30 shadow-lg flex flex-col items-center text-center cursor-pointer hover:bg-blue-700/50 transition-colors duration-200"
                  onClick={() => openInvestorModal(investor)}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                    <div className="text-blue-800 font-bold">{investor.name.split(' ').map(word => word[0]).join('')}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{investor.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{investor.amount}</p>
                  <p className="text-blue-300 text-sm">Joined {investor.joinedDate}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md font-medium"
              >
                Investor Relations Contact
              </a>
            </div>
          </div>
        </section>

        {/* Investor Modal */}
        {isModalOpen && selectedInvestor && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-blue-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start p-6 border-b border-blue-800">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <div className="text-blue-800 font-bold">{selectedInvestor.name.split(' ').map(word => word[0]).join('')}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedInvestor.name}</h3>
                    <p className="text-cyan-400">{selectedInvestor.amount} • Joined {selectedInvestor.joinedDate}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-blue-300 hover:text-white text-2xl p-1"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-6">
                {/* Modal Navigation */}
                <div className="flex mb-6 border-b border-blue-800">
                  <button 
                    className={`px-4 py-2 font-medium ${
                      modalView === 'info' 
                        ? 'text-white border-b-2 border-cyan-400' 
                        : 'text-blue-300 hover:text-white'
                    }`}
                    onClick={switchToInfoView}
                  >
                    <FaInfoCircle className="inline-block mr-2" />
                    Know More About Investor
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium ${
                      modalView === 'booking' 
                        ? 'text-white border-b-2 border-cyan-400' 
                        : 'text-blue-300 hover:text-white'
                    }`}
                    onClick={switchToBookingView}
                  >
                    <FaCalendar className="inline-block mr-2" />
                    Book a Meeting
                  </button>
                </div>
                
                {/* Investor Info View */}
                {modalView === 'info' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">About {selectedInvestor.name}</h4>
                      <p className="text-blue-200">{selectedInvestor.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Investment Focus</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedInvestor.specialties?.map((specialty, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Recent Updates</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-1">Strategic Advisory</h5>
                          <p className="text-blue-200 text-sm">
                            Provided strategic guidance on our expansion into European markets.
                          </p>
                        </div>
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                          <h5 className="font-medium text-white mb-1">Team Growth</h5>
                          <p className="text-blue-200 text-sm">
                            Assisted in hiring our new CTO and VP of Engineering.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={switchToBookingView}
                        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium shadow-md"
                      >
                        Schedule a Meeting
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Booking View */}
                {modalView === 'booking' && (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-4">Schedule with {selectedInvestor.name}</h3>
                      <p className="text-blue-200 mb-6">
                        Choose a date and time that works for you to connect with this investor.
                      </p>
                      
                      {selectedDay && selectedTime && (
                        <div className="bg-blue-800/50 p-4 rounded-lg mb-6">
                          <h4 className="text-white font-medium mb-2">Your Selection</h4>
                          <p className="text-blue-200">
                            {currentMonth} {selectedDay}, 2025 at {selectedTime}
                          </p>
                          {meetingType && (
                            <p className="text-blue-200">Meeting: {meetingType}</p>
                          )}
                          {communicationType && (
                            <p className="text-blue-200">Via: {communicationType}</p>
                          )}
                        </div>
                      )}
                      
                      {selectedDay && selectedTime && meetingType && communicationType && (
                        <button 
                          onClick={handleScheduleMeeting}
                          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium shadow-lg w-full block text-center"
                        >
                          Confirm Meeting
                        </button>
                      )}
                    </div>
                    
                    <div className="lg:col-span-3 bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-700/50">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-white">{currentMonth}</h3>
                        <div className="flex space-x-2">
                          <button 
                            onClick={handlePrevMonth}
                            className="p-2 bg-blue-700 rounded-md text-white"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button 
                            onClick={handleNextMonth}
                            className="p-2 bg-blue-700 rounded-md text-white"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <div key={i} className="text-blue-300 font-medium text-sm py-2">{day}</div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 text-center mb-6">
                        {calendarDays.map((day) => (
                          <button
                            key={day.day}
                            onClick={() => day.available ? handleDaySelect(day.day) : null}
                            disabled={!day.available}
                            className={`py-2 rounded-md text-sm font-medium ${
                              !day.available 
                                ? 'bg-blue-900/30 text-blue-400 cursor-not-allowed'
                                : selectedDay === day.day
                                ? 'bg-cyan-500 text-white'
                                : day.hasEvents
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-blue-700/70 text-white'
                            }`}
                          >
                            {day.day}
                          </button>
                        ))}
                      </div>
                      
                      {selectedDay && (
                        <>
                          <h4 className="text-white font-medium mb-3">Available Times for {currentMonth} {selectedDay}:</h4>
                          <div className="grid grid-cols-4 gap-2 mb-6">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className={`py-2 px-1 rounded-md text-sm font-medium ${
                                  selectedTime === time
                                    ? 'bg-cyan-500 text-white'
                                    : 'bg-blue-700/60 hover:bg-blue-600 text-white'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {selectedTime && (
                        <>
                          <h4 className="text-white font-medium mb-3">Select Meeting Type:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <button 
                              onClick={() => handleMeetingTypeSelect("1:1 Discussion")}
                              className={`text-white p-4 rounded-lg text-left ${
                                meetingType === "1:1 Discussion" 
                                  ? 'bg-cyan-600' 
                                  : 'bg-blue-700 hover:bg-blue-600'
                              }`}
                            >
                              <h5 className="font-medium">1:1 Discussion</h5>
                              <p className="text-sm text-blue-200">30 min</p>
                            </button>
                            <button 
                              onClick={() => handleMeetingTypeSelect("Strategic Review")}
                              className={`text-white p-4 rounded-lg text-left ${
                                meetingType === "Strategic Review" 
                                  ? 'bg-cyan-600' 
                                  : 'bg-blue-700 hover:bg-blue-600'
                              }`}
                            >
                              <h5 className="font-medium">Strategic Review</h5>
                              <p className="text-sm text-blue-200">45 min</p>
                            </button>
                          </div>
                          
                          <h4 className="text-white font-medium mb-3">Communication Preference:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button 
                              onClick={() => handleCommunicationTypeSelect("Video Call")}
                              className={`text-white p-4 rounded-lg text-left flex items-center ${
                                communicationType === "Video Call" 
                                  ? 'bg-cyan-600' 
                                  : 'bg-blue-700 hover:bg-blue-600'
                              }`}
                            >
                              <FaVideo className="mr-3 text-xl" />
                              <div>
                                <h5 className="font-medium">Video Call</h5>
                                <p className="text-sm text-blue-200">Zoom meeting</p>
                              </div>
                            </button>
                            <button 
                              onClick={() => handleCommunicationTypeSelect("Text Chat")}
                              className={`text-white p-4 rounded-lg text-left flex items-center ${
                                communicationType === "Text Chat" 
                                  ? 'bg-cyan-600' 
                                  : 'bg-blue-700 hover:bg-blue-600'
                              }`}
                            >
                              <FaComment className="mr-3 text-xl" />
                              <div>
                                <h5 className="font-medium">Text Chat</h5>
                                <p className="text-sm text-blue-200">Secured messaging</p>
                              </div>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      {/* Updates Section */}
      <section className="py-16 px-4 bg-blue-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Investor <span className="text-cyan-400">Updates</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {updates.map((update, index) => (
              <div 
                key={index} 
                className="bg-blue-800/40 backdrop-blur-sm p-6 rounded-xl border border-blue-600/30 shadow-lg"
              >
                <div className="text-cyan-400 text-sm font-medium mb-2">{update.date}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{update.title}</h3>
                <p className="text-blue-200">{update.content}</p>
                <div className="mt-6 pt-4 border-t border-blue-700/50">
                  <a 
                    href="#" 
                    className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors inline-flex items-center"
                  >
                    Read Full Update
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-800/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/30 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Financial Metrics</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-200 text-sm font-medium mb-1">{metric.title}</h4>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className={`text-sm font-medium ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in <span className="text-cyan-400">Investing?</span>
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Our Series C funding round is now open. Connect with our team to learn about our growth trajectory and future plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium shadow-lg"
            >
              Investment Deck
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md font-medium"
            >
              Contact Investor Relations
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
);
};

export default InvestorsPage;