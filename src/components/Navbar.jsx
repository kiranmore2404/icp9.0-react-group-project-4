import { useState } from "react";
import { Link, NavLink } from "react-router"; 
import { ChevronDown, Menu, X, TramFront } from "lucide-react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-[#73db73] text-green-800 shadow-lg text-xl fixed top-0 w-full z-50 font-bold">
      <div className="container mx-auto flex justify-between items-center px-6 h-20">

        <NavLink to="/" className="flex items-center">
          <div className="flex font-bold">
            <TramFront size={40} />
            <p className="italic text-2xl">TrackGo</p>
          </div>
        </NavLink>

        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <button onClick={() => toggleDropdown("train")} className="hover:text-white flex items-center">
              Train <ChevronDown className="ml-1" />
            </button>
            {dropdown === "train" && (
              <div className="absolute bg-white text-green-800 mt-5 w-50 shadow-lg rounded-lg">
                <NavLink to="/train-explorer" className="block px-4 py-2 text-[17px] hover:bg-gray-200">Train Explorer</NavLink>
                <NavLink to="/train-schedules" className="block text-[17px] px-4 py-2 hover:bg-gray-200">Train Schedules</NavLink>
                <NavLink to="/train-running-status" className="block px-4 py-2 text-[17px] hover:bg-gray-200">Train Running Status</NavLink>
                <NavLink to="/print-train-ticket" className="block px-4 py-2 text-[17px] hover:bg-gray-200">Print Train Ticket</NavLink>
                <NavLink to="/cancel-train-ticket" className="block px-4 py-2 text-[17px] hover:bg-gray-200">Cancel Train Ticket</NavLink>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown("booking")} className="hover:text-white flex items-center">
              Booking <ChevronDown className="ml-1" />
            </button>
            {dropdown === "booking" && (
              <div className="absolute bg-white text-green-800 mt-5 w-48 shadow-lg rounded-lg">
                <NavLink to="/booking" className="block px-4 py-2 text-lg hover:bg-gray-200">Book Ticket</NavLink>
                <NavLink to="/passenger-details" className="block text-lg px-4 py-2 hover:bg-gray-200">Passenger Details</NavLink>
                <NavLink to="/payment" className="block px-4 py-2 text-lg hover:bg-gray-200">Payment</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/pnr-status" className="hover:text-white">PNR Status</NavLink>

          <div className="relative">
            <button onClick={() => toggleDropdown("login")} className="hover:text-white flex items-center">
              Login <ChevronDown className="ml-1" />
            </button>
            {dropdown === "login" && (
              <div className="absolute bg-white text-green-800 mt-5 w-48 shadow-lg rounded-lg">
                <NavLink to="/login" className="block px-4 py-2 text-lg hover:bg-gray-200">Login</NavLink>
                <NavLink to="/forgot-password" className="block text-lg px-4 py-2 hover:bg-gray-200">Forgot Password</NavLink>
                <NavLink to="/register" className="block px-4 py-2 text-lg hover:bg-gray-200">Register</NavLink>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown("support")} className="hover:text-white flex items-center">
              Support <ChevronDown className="ml-1" />
            </button>
            {dropdown === "support" && (
              <div className="absolute bg-white text-green-800 mt-5 w-30 shadow-lg rounded-lg">
                <NavLink to="/support" className="block px-4 py-2 text-lg hover:bg-gray-200">Support</NavLink>
                <NavLink to="/faqs" className="block px-4 py-2 text-lg hover:bg-gray-200">FAQs</NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white text-xl">
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-[#73db73] text-green-800 flex flex-col space-y-3 p-4">
          <NavLink to="/train-explorer" className="hover:text-white" onClick={() => setMobileMenu(false)}>Train Explorer</NavLink>

          <div className="relative">
            <button onClick={() => toggleDropdown("bookingMobile")} className="hover:text-white flex items-center">
              Booking <ChevronDown className="ml-1" />
            </button>
            {dropdown === "bookingMobile" && (
              <div className="absolute bg-white text-green-800 mt-2 w-48 shadow-lg rounded-lg">
                <NavLink to="/booking" className="block px-4 py-2 text-lg hover:bg-gray-200">Book Ticket</NavLink>
                <NavLink to="/passenger-details" className="block text-lg px-4 py-2 hover:bg-gray-200">Passenger Details</NavLink>
                <NavLink to="/payment" className="block px-4 py-2 text-lg hover:bg-gray-200">Payment</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/pnr-status" className="hover:text-white" onClick={() => setMobileMenu(false)}>PNR Status</NavLink>

          <div className="relative">
            <button onClick={() => toggleDropdown("loginMobile")} className="hover:text-white flex items-center">
              Login <ChevronDown className="ml-1" />
            </button>
            {dropdown === "loginMobile" && (
              <div className="absolute bg-white text-green-800 mt-2 w-48 shadow-lg rounded-lg">
                <NavLink to="/login" className="block px-4 py-2 text-lg hover:bg-gray-200" onClick={() => setMobileMenu(false)}>Login</NavLink>
                <NavLink to="/forgot-password" className="block text-lg px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenu(false)}>Forgot Password</NavLink>
                <NavLink to="/register" className="block px-4 py-2 text-lg hover:bg-gray-200" onClick={() => setMobileMenu(false)}>Register</NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;