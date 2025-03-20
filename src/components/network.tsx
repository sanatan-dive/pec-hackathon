// pages/networks.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Types for our data
interface User {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  mutualConnections: number;
  connectionStatus: 'connected' | 'pending' | 'none';
}

interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    title: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  liked: boolean;
}

// Mock data
const suggestedConnections: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Startup Founder & CEO',
    company: 'InnovateTech',
    avatar: '/api/placeholder/40/40',
    mutualConnections: 12,
    connectionStatus: 'none',
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Angel Investor',
    company: 'Venture Capital Partners',
    avatar: '/api/placeholder/40/40',
    mutualConnections: 8,
    connectionStatus: 'none',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    title: 'Marketing Director',
    company: 'Growth Accelerators',
    avatar: '/api/placeholder/40/40',
    mutualConnections: 5,
    connectionStatus: 'pending',
  },
  {
    id: '4',
    name: 'David Park',
    title: 'Product Development Expert',
    company: 'Tech Solutions Inc.',
    avatar: '/api/placeholder/40/40',
    mutualConnections: 15,
    connectionStatus: 'connected',
  },
  {
    id: '5',
    name: 'Amara Wilson',
    title: 'Startup Attorney',
    company: 'Legal Innovations',
    avatar: '/api/placeholder/40/40',
    mutualConnections: 7,
    connectionStatus: 'none',
  },
];

const feedPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Startup Founder & CEO at InnovateTech',
      avatar: '/api/placeholder/48/48',
    },
    content: 'Just closed our seed funding round! Excited to share that InnovateTech has secured $1.5M to expand our AI-driven customer experience platform. Looking forward to growing our team - reach out if youre passionate about AI and customer success!',
    likes: 89,
    comments: 24,
    timestamp: '2 hours ago',
    liked: false,
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Michael Chen',
      title: 'Angel Investor at Venture Capital Partners',
      avatar: '/api/placeholder/48/48',
    },
    content: 'Hosting a free webinar next week on "What VCs Look For in Early-Stage Startups." Will be sharing insights from reviewing over 500 pitch decks this year. Register through the link in comments!',
    image: '/api/placeholder/600/400',
    likes: 156,
    comments: 42,
    timestamp: '5 hours ago',
    liked: true,
  },
  {
    id: '3',
    author: {
      id: '4',
      name: 'David Park',
      title: 'Product Development Expert at Tech Solutions Inc.',
      avatar: '/api/placeholder/48/48',
    },
    content: 'Just published my case study on "How We Reduced Our Product Development Cycle by 40%." Check it out if youre struggling with time-to-market challenges.',
    likes: 67,
    comments: 13,
    timestamp: '1 day ago',
    liked: false,
  },
];

const NetworksPage = () => {
  const [connections, setConnections] = useState<User[]>(suggestedConnections);
  const [posts, setPosts] = useState<Post[]>(feedPosts);

  const handleConnect = (userId: string) => {
    setConnections(
      connections.map((user) =>
        user.id === userId
          ? { ...user, connectionStatus: 'pending' }
          : user
      )
    );
  };

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
      <Head>
        <title>Networks | EntreConnect</title>
        <meta
          name="description"
          content="Connect with entrepreneurs, investors, and mentors on EntreConnect"
        />
      </Head>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - User profile */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-500 h-24 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Image
                  src="/api/placeholder/80/80"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">Alex Morgan</h2>
              <p className="text-gray-600 mt-1">Founder & CEO, TechStartup</p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="text-center">
                  <p className="font-bold text-gray-800">245</p>
                  <p className="text-sm text-gray-600">Connections</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">18</p>
                  <p className="text-sm text-gray-600">Mentors</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">5</p>
                  <p className="text-sm text-gray-600">Investors</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </motion.div>

          {/* Middle - Feed */}
          <div className="lg:col-span-2">
            {/* Post creation */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/api/placeholder/48/48"
                  alt="Your profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <input
                  type="text"
                  className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share an update or opportunity..."
                />
              </div>
              <div className="flex justify-between mt-4">
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Photo
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Video
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Event
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Article
                </button>
              </div>
            </motion.div>

            {/* Posts feed */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <h3 className="font-bold text-gray-800">
                          {post.author.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {post.author.title}
                        </p>
                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-800">{post.content}</p>
                    </div>
                    {post.image && (
                      <div className="mt-3">
                        <Image
                          src={post.image}
                          alt="Post image"
                          width={600}
                          height={400}
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                      <div>{post.likes} likes</div>
                      <div>{post.comments} comments</div>
                    </div>
                    <div className="mt-4 border-t pt-3 flex justify-between">
                      <button
                        className={`flex items-center ${
                          post.liked ? 'text-blue-600' : 'text-gray-600'
                        } hover:text-blue-600`}
                        onClick={() => handleLike(post.id)}
                      >
                        <svg
                          className="w-5 h-5 mr-1"
                          fill={post.liked ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        Like
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        Comment
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Suggested connections section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            People You May Know
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {connections.map((user) => (
              <motion.div
                key={user.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex justify-center mb-3">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-center">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-1">
                    {user.title}
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    {user.company}
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {user.mutualConnections} mutual connections
                  </p>
                  <div className="mt-4">
                    {user.connectionStatus === 'none' ? (
                      <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-md transition-colors text-sm"
                        onClick={() => handleConnect(user.id)}
                      >
                        Connect
                      </button>
                    ) : user.connectionStatus === 'pending' ? (
                      <button className="w-full bg-gray-200 text-gray-600 py-1.5 rounded-md text-sm">
                        Pending
                      </button>
                    ) : (
                      <button className="w-full bg-gray-200 text-gray-600 py-1.5 rounded-md text-sm">
                        Connected
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworksPage;