'use client';
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

// Define TypeScript interfaces (unchanged)
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

interface BackendConnection {
  id: string;
  userId: string;
  connectionId: string;
  createdAt: string;
  updatedAt: string;
}

interface RecommendedConnection {
  id: string;
  userId: string;
  name?: string;
  title?: string;
  company?: string;
}

interface ConnectionsResponse {
  connections: BackendConnection[];
  recommendedConnections: RecommendedConnection[];
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
    lookingFor: '',
  });
  const [connections, setConnections] = useState<Connection[]>([]);
  const [recommendedConnections, setRecommendedConnections] = useState<RecommendedConnection[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hardcoded Mentor Appointments and Investor Meetings (unchanged)
  const mentorAppointments: Appointment[] = [
    {
      id: '1',
      mentorName: 'Jane Smith',
      mentorTitle: 'CTO at TechGrowth',
      date: '2025-03-25',
      time: '10:00 AM',
      topic: 'Technical Architecture Review',
      status: 'upcoming',
    },
    {
      id: '2',
      mentorName: 'Michael Johnson',
      mentorTitle: 'Product Manager at StartupBoost',
      date: '2025-03-28',
      time: '2:00 PM',
      topic: 'Go-to-Market Strategy',
      status: 'upcoming',
    },
  ];

  const investorMeetings: InvestorMeeting[] = [
    {
      id: '1',
      investorName: 'Sarah Williams',
      investorFirm: 'Horizon Ventures',
      date: '2025-04-02',
      time: '11:00 AM',
      pitchTopic: 'Seed Round Funding',
      status: 'upcoming',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [profileRes, connectionsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/connections'),
        ]);

        if (!profileRes.ok) throw new Error(`Profile fetch failed: ${profileRes.status}`);
        if (!connectionsRes.ok) throw new Error(`Connections fetch failed: ${connectionsRes.status}`);

        const profileData = await profileRes.json();
        const connectionsData: ConnectionsResponse = await connectionsRes.json();

        setProfile(profileData);

        const formattedConnections = connectionsData.connections.map((conn, index) => ({
          id: conn.id,
          name: `Connection ${index + 1}`,
          title: 'Member',
          company: 'Startup Network',
          mutualConnections: Math.floor(Math.random() * 10),
        }));

        const formattedRecommendations = connectionsData.recommendedConnections.map((rec, index) => ({
          id: rec.id,
          userId: rec.userId,
          name: rec.name || `Recommended User ${index + 1}`,
          title: rec.title || 'Entrepreneur',
          company: rec.company || 'Tech Startup',
        }));

        setConnections(formattedConnections);
        setRecommendedConnections(formattedRecommendations);
      } catch (error) {
        console.error('Error fetching data:', error);
        setConnections([]);
        setRecommendedConnections([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  // Dark Mode Toggle Handler
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handlers (unchanged except for styling adaptations)
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
      setProfile({ ...profile, skills: [...profile.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({ ...profile, skills: profile.skills.filter((s) => s !== skill) });
  };

  const addInterest = () => {
    if (interestInput.trim() && !profile.interests.includes(interestInput.trim())) {
      setProfile({ ...profile, interests: [...profile.interests, interestInput.trim()] });
      setInterestInput('');
    }
  };

  const removeInterest = (interest: string) => {
    setProfile({ ...profile, interests: profile.interests.filter((i) => i !== interest) });
  };

  const handleConnect = async (userId: string) => {
    try {
      const response = await fetch('/api/connections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ connectionId: userId }),
      });
      if (response.ok) {
        alert('Connection request sent!');
        const connectionsRes = await fetch('/api/connections');
        if (connectionsRes.ok) {
          const data: ConnectionsResponse = await connectionsRes.json();
          const formattedConnections = data.connections.map((conn, index) => ({
            id: conn.id,
            name: `Connection ${index + 1}`,
            title: 'Member',
            company: 'Startup Network',
            mutualConnections: Math.floor(Math.random() * 10),
          }));
          const formattedRecommendations = data.recommendedConnections.map((rec, index) => ({
            id: rec.id,
            userId: rec.userId,
            name: rec.name || `Recommended User ${index + 1}`,
            title: rec.title || 'Entrepreneur',
            company: rec.company || 'Tech Startup',
          }));
          setConnections(formattedConnections);
          setRecommendedConnections(formattedRecommendations);
        }
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-indigo-500 dark:border-indigo-400 rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        Please sign in to view your dashboard
      </div>
    );
  }

  return (
    <div className={`container mx-auto py-8 px-4 ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Welcome, {user.firstName || user.username}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your profile, connections, appointments, and meetings
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex -mb-px">
          {['profile', 'connections', 'mentors', 'investors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Profile Tab Content */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400">
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    width={96}
                    height={96}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {user.fullName || user.username}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{user.emailAddresses[0]?.emailAddress}</p>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Email</label>
                <p>{user.emailAddresses[0]?.emailAddress}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Username</label>
                <p>{user.username}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Account Created</label>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Complete Your Profile</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Tell us more about you and your startup</p>
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="startupIdea" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Startup Idea
                </label>
                <textarea
                  id="startupIdea"
                  placeholder="Describe your startup idea or current project"
                  value={profile.startupIdea}
                  onChange={(e) => setProfile({ ...profile, startupIdea: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Skills
                </label>
                <div className="flex gap-2">
                  <input
                    id="skills"
                    placeholder="Add a skill (e.g., JavaScript, Marketing, UI/UX)"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                    <div
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-indigo-800 dark:text-indigo-200 hover:text-indigo-900 dark:hover:text-indigo-100 ml-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Experience
                </label>
                <textarea
                  id="experience"
                  placeholder="Share your professional experience or background"
                  value={profile.experience}
                  onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Interests
                </label>
                <div className="flex gap-2">
                  <input
                    id="interests"
                    placeholder="Add an interest (e.g., AI, Healthcare, Fintech)"
                    value={interestInput}
                    onChange={(e) => setInterestInput(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                    <div
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => removeInterest(interest)}
                        className="text-indigo-800 dark:text-indigo-200 hover:text-indigo-900 dark:hover:text-indigo-100 ml-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  What are you looking for?
                </label>
                <textarea
                  id="lookingFor"
                  placeholder="Describe what kind of help, connections, or resources you're seeking"
                  value={profile.lookingFor}
                  onChange={(e) => setProfile({ ...profile, lookingFor: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Your Connections</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">People you are already connected with</p>
          {connections.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium">No connections yet</h3>
              <p className="mt-1">Start building your network.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connections.map((connection) => (
                <div
                  key={connection.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 dark:text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{connection.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{connection.title}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">{connection.company}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {connection.mutualConnections} mutual connections
                  </div>
                </div>
              ))}
            </div>
          )}

          <h2 className="text-xl font-bold mt-8 mb-2 text-gray-900 dark:text-gray-100">Recommended Connections</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">People you might want to connect with</p>
          {recommendedConnections.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium">No recommendations available</h3>
              <p className="mt-1">Recommendations will appear here when available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedConnections.map((connection) => (
                <div
                  key={connection.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 dark:text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{connection.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{connection.title}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">{connection.company}</p>
                  <button
                    onClick={() => handleConnect(connection.userId)}
                    className="w-full mt-2 py-1 px-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}

          <button className="mt-6 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Find More Connections
          </button>
        </div>
      )}

      {/* Mentor Appointments Tab Content */}
      {activeTab === 'mentors' && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Your Mentor Appointments</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your scheduled sessions with mentors</p>
          <div className="space-y-4">
            {mentorAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{appointment.mentorName}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{appointment.mentorTitle}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>
                        {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Topic:</span>
                      <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">{appointment.topic}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
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
          <button className="mt-6 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Appointments
          </button>
        </div>
      )}

      {/* Investor Meetings Tab Content */}
      {activeTab === 'investors' && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Your Investor Meetings</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Track your scheduled pitches and follow-ups with investors</p>
          <div className="space-y-4">
            {investorMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{meeting.investorName}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{meeting.investorFirm}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>
                        {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pitch Topic:</span>
                      <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">{meeting.pitchTopic}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
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

          <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Schedule New Investor Meeting</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="investorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Investor Name
                </label>
                <input
                  type="text"
                  id="investorName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter investor name"
                />
              </div>
              <div>
                <label htmlFor="investorFirm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Investor Firm
                </label>
                <input
                  type="text"
                  id="investorFirm"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter investor firm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="meetingDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    id="meetingDate"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="meetingTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Time
                  </label>
                  <input
                    type="time"
                    id="meetingTime"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="pitchTopic" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Pitch Topic
                </label>
                <input
                  type="text"
                  id="pitchTopic"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter pitch topic"
                />
              </div>
              <div>
                <label htmlFor="meetingNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Meeting Notes or Agenda
                </label>
                <textarea
                  id="meetingNotes"
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter any notes or agenda items"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Schedule Meeting
              </button>
            </form>
          </div>

          <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Pitch Deck Management</h3>
            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Current Pitch Deck</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: March 15, 2025</p>
                </div>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  View
                </button>
              </div>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none">
                  Upload New Version
                </button>
                <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none">
                  Get Feedback on Pitch Deck
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Metrics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Network Size</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">{connections.length}</p>
          <div className="mt-1 text-xs text-green-500 dark:text-green-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            <span>+3 this week</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Upcoming Appointments</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">{mentorAppointments.length}</p>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Next: {mentorAppointments.length > 0 ? mentorAppointments[0].date : 'None'}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Investor Meetings</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">{investorMeetings.length}</p>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Next: {investorMeetings.length > 0 ? investorMeetings[0].date : 'None'}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Profile Completion</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {Math.round(
              ((profile.startupIdea ? 1 : 0) +
                (profile.skills.length > 0 ? 1 : 0) +
                (profile.experience ? 1 : 0) +
                (profile.interests.length > 0 ? 1 : 0) +
                (profile.lookingFor ? 1 : 0)) /
                5 *
                100
            )}%
          </p>
          <div className="mt-1 text-xs text-blue-500 dark:text-blue-400">
            Complete your profile to get better matches
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;