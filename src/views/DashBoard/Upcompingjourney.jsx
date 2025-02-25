
const UpcomingJourneys = () => {
    // Placeholder upcoming journeys data
    const upcomingJourneys = [
      { destination: 'Paris', date: '2025-04-01' },
      { destination: 'Tokyo', date: '2025-05-15' },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Journeys</h2>
        <ul className="mt-4 space-y-2">
          {upcomingJourneys.map((journey, index) => (
            <li key={index} className="flex justify-between text-gray-600">
              <span>{journey.destination}</span> 
              <span>{journey.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UpcomingJourneys;
  