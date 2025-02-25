import PropTypes from 'prop-types';

const PersonalizedRecommendations = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-800">Recommended for You :</h2>
      <ul className="mt-4 space-y-2">
        {user.favoriteDestinations.map((dest, index) => (
          <li key={index} className="text--600">
            Explore destinations like <strong>{dest}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
PersonalizedRecommendations.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    favoriteDestinations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PersonalizedRecommendations;

