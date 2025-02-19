import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Payment = () => {
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
    toast.success("Payment Successful");
  };

  return ( 
    <div className="w-150 mx-auto m-10 mt-25 p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-2xl  text-center font-bold mb-4">TRAIN TICKET PAYMENT</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input type="text"
           name="name"
            value={formData.name} 
            onChange={handleChange} 
            required
             className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Select Train</label>
          <select name="train" value={formData.train} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="Express Train">Express Train</option>
            <option value="Superfast Train">Superfast Train</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Travel Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <h3 className="text-lg font-semibold mt-4">Payment Details</h3>
        <div>
          <label className="block font-medium">Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Expiry Date</label>
            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="MM/YY" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Pay Now</button>
        <Toaster/>
      </form>
    </div>
  );
};

export default Payment;
