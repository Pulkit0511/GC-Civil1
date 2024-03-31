import React, { useState } from 'react';
import { useQuery, useAction, getBookings, createBooking } from 'wasp/client/operations';
import { Link } from 'react-router-dom';

const BookingsPage = () => {
  const { data: bookings, isLoading, error } = useQuery(getBookings);
  const createBookingFn = useAction(createBooking);
  const [seatNumber, setSeatNumber] = useState(0);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateBooking = () => {
    createBookingFn({ seatNumber: seatNumber });
    setSeatNumber(0);
  };

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <input
          type='number'
          placeholder='Seat Number'
          className='px-1 py-2 border rounded text-lg'
          value={seatNumber}
          onChange={(e) => setSeatNumber(parseInt(e.target.value))}
        />
        <button
          onClick={handleCreateBooking}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded ml-2'
        >
          Create Booking
        </button>
      </div>
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>Seat Number: {booking.seatNumber}</div>
        </div>
      ))}
    </div>
  );
}

export default BookingsPage;