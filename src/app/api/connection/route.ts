import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const connections = await prisma.connection.findMany({
    where: { userId },
  });

  return NextResponse.json(connections, { status: 200 });
}