import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import  { useState } from 'react';
import { useUser } from '@clerk/nextjs';


interface Appointment {
    id: string;
    mentorName: string;
    mentorTitle: string;
    date: string;
    time: string;
    topic: string;
    status: 'upcoming' | 'completed' | 'canceled';
  }
  

function DashboardMentor() {
    const {user} = useUser();
    const [mentorAppointments, setMentorAppointments] = useState<Appointment[]>([]); // State for appointments
    const [rescheduleBooking, setRescheduleBooking] = useState<{ id: string; newTime: string } | null>(null);

       const handleCancelMentor = async (bookingId: string) => {
        try {
          const res = await fetch('/api/bookings', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookingId }),
          });
      
          const data = await res.json();
      
          if (!res.ok) {
            throw new Error(data.error || 'Failed to cancel appointment');
          }
      
          // Update local state after successful cancellation
          setMentorAppointments((prevAppointments) =>
            prevAppointments.filter((appointment) => appointment.id !== bookingId)
          );
        } catch (error) {
          console.error('Cancellation error:', error);
        }
      };
      const handleReschedule = async (bookingId: string, newTime: string) => {
        try {
          const res = await fetch('/api/bookings', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookingId, newTime }),
          });
      
          const data = await res.json();
      
          if (!res.ok) {
            throw new Error(data.error || 'Failed to reschedule appointment');
          }
      
          // Update local state after successful rescheduling
          setMentorAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
              appointment.id === bookingId ? { ...appointment, date: newTime.split(' ')[0], time: newTime.split(' ')[1] } : appointment
            )
          );
      
          setRescheduleBooking(null); // Close modal after rescheduling
        } catch (error) {
          console.error('Reschedule error:', error);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const bookingsRes = await fetch(`/api/bookings?userId=${user?.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (!bookingsRes.ok) throw new Error(`Bookings fetch failed: ${bookingsRes.status}`);
      
            const bookingsData: Appointment[] = await bookingsRes.json();
            setMentorAppointments(bookingsData); // Set fetched appointments
            console.log("Bookings data:", bookingsData);
          } catch (error) {
            console.error('Error fetching data:', error);
            setMentorAppointments([]); // Default to empty on error
          }
        };
      
        if (user) fetchData();
      }, [user]);
      
  return (
    <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Your Mentor Appointments</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your scheduled sessions with mentors</p>
                  {mentorAppointments.length === 0 ? (
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <h3 className="mt-2 text-lg font-medium">No appointments scheduled</h3>
                      <p className="mt-1">Book a session with a mentor to get started.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                     {mentorAppointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className='flex gap-4 justify-center items-center '>
            <button onClick={() => handleCancelMentor(appointment.id)}
                className="px-3 h-8   flex gap-2 justify-center items-center border rounded-md   dark:text-white text-gray-700  hover:bg-red-500 ">
                  <FaTrash className=" text-red-600"  />
                  
                </button>
              
             
              <div>
                
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{appointment.mentorName}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{appointment.mentorTitle}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</span>
                </div>
                <div className="mt-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Topic:</span>
                  <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">{appointment.topic}</span>
                </div>
              </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => setRescheduleBooking({ id: appointment.id, newTime: '' })}
                >
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
                  )}
                  <button className="mt-6 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View All Appointments
                  </button>
                </div>
                {rescheduleBooking && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Reschedule Appointment</h2>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">Select New Time</label>
      <input
        type="datetime-local"
        className="mt-1 p-2 border rounded w-full bg-gray-100 dark:bg-gray-700"
        value={rescheduleBooking.newTime}
        onChange={(e) => setRescheduleBooking((prev) => ({ ...prev!, newTime: e.target.value }))}
      />
      <div className="mt-4 flex justify-end gap-2">
        <button
          className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={() => setRescheduleBooking(null)}
        >
          Cancel
        </button>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleReschedule(rescheduleBooking.id, rescheduleBooking.newTime)}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}
    </div>
    
  )
}

export default DashboardMentor