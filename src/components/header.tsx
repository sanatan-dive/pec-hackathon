// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton,
  useClerk 
} from "@clerk/nextjs";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <header className="bg-gradient-to-br from-indigo-800 via-blue-800 to-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors">
              EntreConnect
            </Link>
          </div>
          
          <nav className="flex space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/" 
                  ? "bg-indigo-500 text-white" 
                  : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
              }`}
            >
              Home
            </Link>
            
            <SignedOut>
              <Link 
                href="/features" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/features" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Features
              </Link>
              <Link 
                href="/resources" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/resources" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Resources
              </Link>
            </SignedOut>
            
            <SignedIn>
              <Link 
                href="/mentors" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/mentors" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Mentors
              </Link>
              <Link 
                href="/resources" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/resources" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Resources
              </Link>
              <Link 
                href="/networks" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/networks" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Networks
              </Link>
              <Link 
                href="/investors" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/investors" 
                    ? "bg-indigo-500 text-white" 
                    : "text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors"
                }`}
              >
                Investors
              </Link>
            </SignedIn>
          </nav>
          
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              <div className="flex items-center gap-4">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10"
                    }
                  }}
                />
                <button>
                  <Link 
                    href="/dashboard" 
                    className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                </button>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;