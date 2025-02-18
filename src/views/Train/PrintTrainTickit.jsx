import React, { useState } from 'react';

const PrintTrainTicketPage = () => {
  const [ticketDetails, setTicketDetails] = useState({
    bookingId: '',
    passengerName: '',
    trainNumber: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePrint = () => {
    if (ticketDetails.bookingId) {
      console.log("Printing ticket for Booking ID:", ticketDetails.bookingId);
      window.print(); 
    } else {
      alert("Please provide a valid booking ID.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-30 mb-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Print Train Ticket</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-600" >Booking ID</label>
          <input
            id="bookingId"
            type="text"
            placeholder="Enter Booking ID"
            value={ticketDetails.bookingId}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-600">Passenger Name</label>
          <input
            id="passengerName"
            type="text"
            placeholder="Passenger Name"
            value={ticketDetails.passengerName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-600" >Train Number</label>
          <input
            id="trainNumber"
            type="text"
            placeholder="Train Number"
            value={ticketDetails.trainNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-600">Date</label>
          <input
            id="date"
            type="date"
            value={ticketDetails.date}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="w-full py-2 mt-5 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition duration-200"
        >
          Print Ticket
        </button>
      </form>
    </div>
  );
};

export default PrintTrainTicketPage;