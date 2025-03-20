import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const connections = await prisma.connection.findMany({
      where: { userId },
    });

    const recommendedConnections = await prisma.userProfile.findMany({
      where: { userId: { not: userId } }, // All connections except the user's own
    });
    console.log(recommendedConnections)

    return NextResponse.json(
      {
        connections,
        recommendedConnections,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching connections:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}