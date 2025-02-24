import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import toast, { Toaster } from "react-hot-toast";

const PrintTrainTicketPage = () => {
  const ticketRef = useRef(null); 
  const [ticketDetails, setTicketDetails] = useState(null); 

  const generateRandomTrainNumber = () => {
    return Math.floor(10000 + Math.random() * 90000); 
  };

  useEffect(() => {
    const storedTicket = localStorage.getItem("bookingDetails");
    if (storedTicket) {
      const parsedTicket = JSON.parse(storedTicket);
      setTicketDetails({
        ...parsedTicket,
        trainNumber: generateRandomTrainNumber(),
      });
    } else {
      toast.error("No ticket data found. Please book a ticket first.");
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
    documentTitle: `Train_Ticket_${ticketDetails?.bookingID || "Unknown"}`, 
    onBeforeGetContent: () => {
      if (!ticketRef.current) {
        toast.error("No ticket content to print!");
        return null;
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Print Train Ticket
        </h1>

        {ticketDetails ? (
          <div ref={ticketRef} className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4">Train Ticket</h2>
            <p><strong>Booking ID:</strong> {ticketDetails.bookingID}</p>
            <p><strong>Name:</strong> {ticketDetails.name}</p>
            <p><strong>Age:</strong> {ticketDetails.age}</p>
            <p><strong>Gender:</strong> {ticketDetails.gender}</p>
            <p><strong>ID Proof:</strong> {ticketDetails.idProof}</p>
            <p><strong>From:</strong> {ticketDetails.from}</p>
            <p><strong>To:</strong> {ticketDetails.to}</p>
            <p><strong>Date:</strong> {ticketDetails.date}</p>
            <p><strong>Passengers:</strong> {ticketDetails.passengers}</p>
            <p><strong>Seat Preference:</strong> {ticketDetails.seatPreference}</p>
            <p><strong>Train Number:</strong> {ticketDetails.trainNumber}</p>
            <p><strong>Total Price:</strong> ₹{ticketDetails.totalPrice}</p>
          </div>
        ) : (
          <p className="text-red-600 text-center">No ticket details available.</p>
        )}

        <button
          onClick={handlePrint}
          className="w-full py-2 mt-5 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition duration-200"
          disabled={!ticketDetails} 
        >
          Download Ticket as PDF
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default PrintTrainTicketPage;
