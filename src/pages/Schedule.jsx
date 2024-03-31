import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useAction, getSchedule } from 'wasp/client/operations';

const SchedulePage = () => {
  const { data: schedule, isLoading, error } = useQuery(getSchedule);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {schedule.map((entry) => (
        <div key={entry.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
          <div>{entry.startTime} - {entry.endTime}</div>
          <div>{entry.startLocation} - {entry.endLocation}</div>
        </div>
      ))}
    </div>
  );
}

export default SchedulePage;