// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratings average
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');
  // sondaki saçma gibi görünen .replace() kısım 2.0, 2,0; 10.0, 10,0 şeklindeki tam sayıları 2, 10 şeklinde yazmak için eklendi

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   // yukarıdaki propTypes'ın p'si küçük olacak, dikkat et!
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
