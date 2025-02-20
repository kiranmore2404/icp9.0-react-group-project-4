import { useState } from "react";
import { useNavigate } from "react-router";
import Background from "../../assets/images/bg1.jpg";

export default function Login() {
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
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center opacity-90"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-slate-300 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-[#333333] text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-left">
            <a href="/forgot-password" className="text-[#008000] text-sm font-medium hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#008000] text-white py-3 rounded-lg hover:bg-green-700"
          >
            SIGN IN
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        <div className="text-center mt-4">
          <p>Don't have an account? <a href="/register" className="text-[#008000] font-medium hover:underline">Register</a></p>
        </div>
      </div>
    </div>
  );
}