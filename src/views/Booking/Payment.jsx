import React, { useState } from "react";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Background from "../../assets/images/bg1.jpg";

const Payment = () => {
  const location = useLocation();
  const price = location.state?.price || 0; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    train: "",
    date: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment Successful.");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="w-120 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl text-green-700 text-center font-bold mb-4">
          TRAIN TICKET PAYMENT
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg font-bold text-green-800 text-center">
            Total Amount: ₹{price.toFixed(2)}
          </p>
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md text-gray-700"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-gray-700"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-green-700">Payment Details</h3>
          <div>
            <label className="block font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-gray-700"
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Pay Now
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Payment;
