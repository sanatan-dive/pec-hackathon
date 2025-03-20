import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

// Interface for Connection
interface Connection {
  id: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  mutualConnections: number;
}

// Interface for UserProfile (simplified for response)
interface UserProfile {
  id: string;
  userId: string;
  startupIdea: string;
  skills: string[];
  experience: string;
  interests: string[];
  lookingFor: string;
}

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Fetch the user's existing connections
    const connections = await prisma.connection.findMany({
      where: { userId },
    });

    // Fetch all user profiles except the current user's profile
    const recommendedProfiles = await prisma.userProfile.findMany({
      where: {
        userId: { not: userId }, // Exclude the current user's profile
      },
    });

    return NextResponse.json({
      connections, // User's current connections
      recommendedProfiles, // All other user profiles
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching connections and profiles:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}