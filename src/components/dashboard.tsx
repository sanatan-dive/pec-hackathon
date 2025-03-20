'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

// Define TypeScript interfaces
interface UserProfile {
  startupIdea: string;
  skills: string[];
  experience: string;
  interests: string[];
  lookingFor: string;
}

interface Connection {
  id: string;
  name: string;
  title: string;
  company: string;
  mutualConnections: number;
}

interface Appointment {
  id: string;
  mentorName: string;
  mentorTitle: string;
  date: string;
  time: string;
  topic: string;
  status: 'upcoming' | 'completed' | 'canceled';
}

interface InvestorMeeting {
  id: string;
  investorName: string;
  investorFirm: string;
  date: string;
  time: string;
  pitchTopic: string;
  status: 'upcoming' | 'completed' | 'canceled';
}

const UserDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile>({
    startupIdea: '',
    skills: [],
    experience: '',
    interests: [],
    lookingFor: ''
  });
  const [connections, setConnections] = useState<Connection[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  // Hardcoded Mentor Appointments
  const mentorAppointments: Appointment[] = [
    {
      id: '1',
      mentorName: 'Jane Smith',
      mentorTitle: 'CTO at TechGrowth',
      date: '2025-03-25',
      time: '10:00 AM',
      topic: 'Technical Architecture Review',
      status: 'upcoming'
    },
    {
      id: '2',
      mentorName: 'Michael Johnson',
      mentorTitle: 'Product Manager at StartupBoost',
      date: '2025-03-28',
      time: '2:00 PM',
      topic: 'Go-to-Market Strategy',
      status: 'upcoming'
    }
  ];

  // Hardcoded Investor Meetings
  const investorMeetings: InvestorMeeting[] = [
    {
      id: '1',
      investorName: 'Sarah Williams',
      investorFirm: 'Horizon Ventures',
      date: '2025-04-02',
      time: '11:00 AM',
      pitchTopic: 'Seed Round Funding',
      status: 'upcoming'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [profileRes, connectionsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/connections'),
        ]);

        const profileData = await profileRes.json();
        const connectionsData = await connectionsRes.json();

        setProfile(profileData);
        setConnections(connectionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      if (response.ok) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !profile.skills.includes(skillInput.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(s => s !== skill)
    });
  };

  const addInterest = () => {
    if (interestInput.trim() && !profile.interests.includes(interestInput.trim())) {
      setProfile({
        ...profile,
        interests: [...profile.interests, interestInput.trim()]
      });
      setInterestInput('');
    }
  };

  const removeInterest = (interest: string) => {
    setProfile({
      ...profile,
      interests: profile.interests.filter(i => i !== interest)
    });
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading your dashboard...</div>;
  }

  if (!user) {
    return <div className="text-center p-8">Please sign in to view your dashboard</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user.firstName || user.username}</h1>
        <p className="text-gray-600">Manage your profile, connections, appointments, and meetings</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('profile')}
            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'connections'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Connections
          </button>
          <button
            onClick={() => setActiveTab('mentors')}
            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'mentors'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Mentor Appointments
          </button>
          <button
            onClick={() => setActiveTab('investors')}
            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'investors'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Investor Meetings
          </button>
        </nav>
      </div>

      {/* Profile Tab Content */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    width={96}
                    height={96}
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-medium">{user.fullName || user.username}</h3>
              <p className="text-gray-600">{user.emailAddresses[0]?.emailAddress}</p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p>{user.emailAddresses[0]?.emailAddress}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Username</label>
                <p>{user.username}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Account Created</label>
                {/* @ts-expect-error missing type */}
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2>
            <p className="text-gray-600 mb-6">Tell us more about you and your startup</p>
            
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="startupIdea" className="block text-sm font-medium text-gray-700">Startup Idea</label>
                <textarea
                  id="startupIdea"
                  placeholder="Describe your startup idea or current project"
                  value={profile.startupIdea}
                  onChange={(e) => setProfile({ ...profile, startupIdea: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                <div className="flex gap-2">
                  <input
                    id="skills"
                    placeholder="Add a skill (e.g., JavaScript, Marketing, UI/UX)"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button 
                    type="button" 
                    onClick={addSkill}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.skills.map((skill, index) => (
                    <div key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center gap-1">
                      {skill}
                      <button 
                        type="button" 
                        onClick={() => removeSkill(skill)}
                        className="text-indigo-800 hover:text-indigo-900 ml-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
                <textarea
                  id="experience"
                  placeholder="Share your professional experience or background"
                  value={profile.experience}
                  onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
                <div className="flex gap-2">
                  <input
                    id="interests"
                    placeholder="Add an interest (e.g., AI, Healthcare, Fintech)"
                    value={interestInput}
                    onChange={(e) => setInterestInput(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button 
                    type="button" 
                    onClick={addInterest}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.interests.map((interest, index) => (
                    <div key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center gap-1">
                      {interest}
                      <button 
                        type="button" 
                        onClick={() => removeInterest(interest)}
                        className="text-indigo-800 hover:text-indigo-900 ml-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700">What are you looking for?</label>
                <textarea
                  id="lookingFor"
                  placeholder="Describe what kind of help, connections, or resources you're seeking"
                  value={profile.lookingFor}
                  onChange={(e) => setProfile({ ...profile, lookingFor: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Profile
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Connections Tab Content */}
      {activeTab === 'connections' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Recommended Connections</h2>
          <p className="text-gray-600 mb-6">People you might want to connect with based on your profile</p>
          
          {connections.length === 0 ? (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium">No recommendations yet</h3>
              <p className="mt-1 text-gray-500">Complete your profile to get personalized connection recommendations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connections.map((connection) => (
                <div key={connection.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{connection.name}</h3>
                      <p className="text-gray-600 text-sm">{connection.title}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">{connection.company}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    {connection.mutualConnections} mutual connections
                  </div>
                  <button className="w-full py-1 px-3 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <button className="mt-6 w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Find More Connections
          </button>
        </div>
      )}

      {/* Mentor Appointments Tab Content */}
      {activeTab === 'mentors' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Your Mentor Appointments</h2>
          <p className="text-gray-600 mb-6">Manage your scheduled sessions with mentors</p>
          
          <div className="space-y-4">
            {mentorAppointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{appointment.mentorName}</h3>
                    <p className="text-gray-600 text-sm">{appointment.mentorTitle}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-medium">Topic:</span>
                      <span className="text-sm ml-1">{appointment.topic}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      Reschedule
                    </button>
                    <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-6 w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Appointments
          </button>
        </div>
      )}

      {/* Investor Meetings Tab Content */}
      {activeTab === 'investors' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Your Investor Meetings</h2>
          <p className="text-gray-600 mb-6">Track your scheduled pitches and follow-ups with investors</p>
          
          <div className="space-y-4">
            {investorMeetings.map((meeting) => (
              <div key={meeting.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{meeting.investorName}</h3>
                    <p className="text-gray-600 text-sm">{meeting.investorFirm}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{new Date(meeting.date).toLocaleDateString()} at {meeting.time}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-medium">Pitch Topic:</span>
                      <span className="text-sm ml-1">{meeting.pitchTopic}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      Prepare Pitch
                    </button>
                    <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-6 w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Investor Meetings
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;