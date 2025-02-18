import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function PassengerForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    idProof: "",
    seatPreference: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    toast.success("DONE.");
  };

  return (
    <div className="w-150 m-10 mt-25 mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-bold text-center mb-4">PASSENGER DETAILS</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full p-2 border rounded-md " />
        </div>

        <div>
          <label className="block font-medium">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required
            className="w-full p-2 border rounded-md " />
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required
            className="w-full p-2 border rounded-md ">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">ID Proof</label>
          <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} required
            className="w-full p-2 border rounded-md " />
        </div>

        <div>
          <label className="block font-medium">Seat Preference</label>
          <select name="seatPreference" value={formData.seatPreference} onChange={handleChange} required
            className="w-full p-2 border rounded-md ">
            <option value="">Select</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">Submit</button>
        <Toaster/>
      </form>
    </div>
  );
}
