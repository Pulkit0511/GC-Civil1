import React, { useState } from 'react';
import { useQuery, useAction, getFacultyPayments, createFacultyPayment, updateFacultyPayment } from 'wasp/client/operations';

const FacultyPaymentsPage = () => {
  const { data: facultyPayments, isLoading, error } = useQuery(getFacultyPayments);
  const createFacultyPaymentFn = useAction(createFacultyPayment);
  const updateFacultyPaymentFn = useAction(updateFacultyPayment);
  const [newPaymentAmount, setNewPaymentAmount] = useState(0);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreatePayment = () => {
    createFacultyPaymentFn({ amount: newPaymentAmount });
    setNewPaymentAmount(0);
  };

  const handleUpdatePayment = (paymentId, isPaid) => {
    updateFacultyPaymentFn({ paymentId, isPaid });
  };

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <input
          type='number'
          placeholder='Enter amount'
          className='px-1 py-2 border rounded text-lg'
          value={newPaymentAmount}
          onChange={(e) => setNewPaymentAmount(parseFloat(e.target.value))}
        />
        <button
          onClick={handleCreatePayment}
          className='bg-green-500 hover:bg-green-700 px-2 py-2 text-white font-bold rounded ml-2'
        >
          Create Payment
        </button>
      </div>
      {facultyPayments.map((payment) => (
        <div
          key={payment.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{payment.amount}</div>
          <div>{payment.isPaid ? 'Paid' : 'Pending'}</div>
          <div>
            <button
              onClick={() => handleUpdatePayment(payment.id, !payment.isPaid)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              {payment.isPaid ? 'Mark as Pending' : 'Mark as Paid'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FacultyPaymentsPage;