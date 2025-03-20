import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized - No user ID found' }, { status: 401 });
  }

  const profile = await prisma.userProfile.findUnique({
    where: { userId },
  });

  return NextResponse.json(
    profile || {
      startupIdea: '',
      skills: [],
      experience: '',
      interests: [],
      lookingFor: '',
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized - No user ID found' }, { status: 401 });
  }

  const { startupIdea, skills, experience, interests, lookingFor } = await req.json();

  const profile = await prisma.userProfile.upsert({
    where: { userId },
    update: { startupIdea, skills, experience, interests, lookingFor },
    create: {
      userId,
      startupIdea,
      skills,
      experience,
      interests,
      lookingFor,
    },
  });

  return NextResponse.json(profile, { status: 200 });
}