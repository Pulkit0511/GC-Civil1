import React from 'react';
import { Link } from 'react-router-dom';
import TransportSchedule from "./TransportSchedule";

const HomePage = () => {
  return (
    <div className='p-4 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Welcome to Our College Transportation App!</h1>
      <p className='mb-4 text-center'>Explore the features of our app:</p>
      <div className='grid grid-cols-2 gap-4'>
        <LinkBox to='/schedule'>
          View Schedule
        </LinkBox>
        <LinkBox to='/admin'>Admin Access</LinkBox>
        <LinkBox to='/faculty-payments'>Make Payment</LinkBox>
        <LinkBox to='/notifications'>Receive Notifications</LinkBox>
        <LinkBox to='/bookings'>Book Seats</LinkBox>
        <LinkBox to='/route-planning'>Route Planning</LinkBox>
      </div>
    </div>
  );
}

const LinkBox = ({ to, children }) => {
  return (
    <Link to={to} className='bg-white rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300'>
      {children}
    </Link>
  );
}

export default HomePage;
