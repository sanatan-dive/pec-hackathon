import { PrismaClient } from '@prisma/client';
import {  NextResponse } from 'next/server';

export async function GET() {
    const prisma = new PrismaClient();

    try {
        const mentors = await prisma.mentor.findMany();
        return NextResponse.json(mentors);
    } catch (error) {
        console.error('Error fetching mentors:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}