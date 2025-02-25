import { useState } from 'react';
import PropTypes from 'prop-types';

const TravelHistory = ({ history }) => {
  const [filter, setFilter] = useState('');

  const filteredHistory = history.filter((journey) =>
    journey.destination.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800">Your Travel History</h2>
      <input
        type="text"
        placeholder="Filter by destination"
        className="mt-4 w-full p-2 border rounded-md bg-green-600"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="mt-4 space-y-2">
        {filteredHistory.map((journey, index) => (
          <li key={index} className="flex justify-between text-green-400">
            <span>{journey.destination}</span>
            <span>{journey.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
TravelHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TravelHistory;
