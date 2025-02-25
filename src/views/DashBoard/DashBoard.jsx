import { useState, useEffect } from 'react';
import UpcomingJourneys from './Upcompingjourney';
import TravelHistory from './TravelHistory';
import PersonalizedRecommendations from './Persnalized';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [travelHistory, setTravelHistory] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const user = { name: 'Kiran More', favoriteDestinations: ['Paris', 'Tokyo', 'New York'] };
      setUserData(user);

      const history = [
        { destination: 'Paris', date: '2024-01-15' },
        { destination: 'Tokyo', date: '2024-08-20' },
        { destination: 'New York', date: '2023-12-10' },
        { destination: 'London', date: '2023-10-25' },
      ];
      setTravelHistory(history);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700">Welcome to Your Dashboard, {userData?.name}</h1>

      {userData && <PersonalizedRecommendations user={userData} />}

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <UpcomingJourneys />
        <TravelHistory history={travelHistory} />
      </div>
    </div>
  );
};

export default Dashboard;
