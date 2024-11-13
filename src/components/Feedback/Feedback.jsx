import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
        <ul className={css.Feedback}>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
            {totalFeedback > 0 && <li>Positive: {positiveFeedback}%</li>}
        </ul>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    totalFeedback: PropTypes.number,
    positiveFeedback: PropTypes.number,
};

export default Feedback;
