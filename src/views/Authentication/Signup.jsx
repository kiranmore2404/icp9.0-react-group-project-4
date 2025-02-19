import React, { useState } from 'react';
import { useNavigate } from 'react-router';
export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill all fields!');
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);
    if (user) {
      alert('Login Successful');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/');
    } else {
      setError('Invalid credentials! Please register first.');
      alert('No account found. Please create an account.');
      navigate('/register');
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center  justify-center bg-[#F8F9FA] mt-15">

        <div className="bg-white  rounded-xl shadow-lg flex w-250 ">

          <div>
            <img src='src\assets\images\train.avif' className='h-106 rounded-l-xl'></img>
          </div>

          <div className='ml-13 p-5'>
            <h2 className="text-[32px] font-bold text-[#333333] text-center mb-4">LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#333333] text-sm font-medium">User Name</label>
                <input
                  type="text"
                  className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#333333] text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="text-sm text-[#004080] cursor-pointer hover:underline"
                  onClick={() => navigate('/forgot-account')}
                >
                  Forgot Account Details?
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008000] text-white py-3 rounded-lg hover:bg-green-700"
              >
                SIGN IN
              </button>
            </form>
            {error && <p>{error}</p>}
            <div className="flex justify-between mt-4">
              <button
                className="w-[45%] bg-[#004080] text-white py-2 rounded-lg hover:bg-blue-800"
                onClick={() => navigate('/register')}
              >
                CREATE ACCOUNT
              </button>
              <button className="w-[45%] border-2 border-[#FFA500] text-[#FFA500] py-2 rounded-lg hover:bg-orange-100">
                AGENT LOGIN
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}