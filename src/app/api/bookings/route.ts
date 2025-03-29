import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

// GET: Fetch all bookings for the authenticated user
export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        mentor: {
          select: {
            name: true,
            title: true, // Assuming a title field in the Mentor model
          },
        },
      },
    });

    const appointments = bookings.map((booking) => ({
      id: booking.id,
      mentorName: booking.mentor.name,
      mentorTitle: booking.mentor.title || 'Mentor',
      date: booking.time.split(' ')[0], // Extract date
      time: booking.time.split(' ')[1] || booking.time, // Extract time
      topic: 'Mentorship Session',
      status: new Date(booking.time) > new Date() ? 'upcoming' : 'completed',
    }));

    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST: Create a new booking
export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { mentorId, time } = await req.json();

    if (!mentorId || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existingBooking = await prisma.booking.findFirst({
      where: { mentorId, time },
    });

    if (existingBooking) {
      return NextResponse.json({ error: 'Time slot already booked' }, { status: 409 });
    }

    const booking = await prisma.booking.create({
      data: { mentorId, time, userId },
    });

    return NextResponse.json({ message: 'Booking successful', booking }, { status: 200 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE: Cancel a booking
export async function DELETE(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { bookingId } = await req.json();

    if (!bookingId) {
      return NextResponse.json({ error: 'Booking ID is required' }, { status: 400 });
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking || booking.userId !== userId) {
      return NextResponse.json({ error: 'Booking not found or unauthorized' }, { status: 404 });
    }

    await prisma.booking.delete({ where: { id: bookingId } });

    return NextResponse.json({ message: 'Booking canceled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// PUT: Update booking details (e.g., reschedule)
export async function PUT(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { bookingId, newTime } = await req.json();

    if (!bookingId || !newTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if the new time slot is already booked
    const existingBooking = await prisma.booking.findFirst({
      where: { time: newTime },
    });

    if (existingBooking) {
      return NextResponse.json({ error: 'Time slot already booked' }, { status: 409 });
    }

    // Update booking time
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId, userId },
      data: { time: newTime },
    });

    return NextResponse.json({ message: 'Booking rescheduled', updatedBooking }, { status: 200 });
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

