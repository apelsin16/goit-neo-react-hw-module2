import PropTypes from 'prop-types';
import css from './Options.module.css';

export const Options = ({
    onUpdateFeedback,
    totalFeedback,
    onResetFeedback,
}) => {
    return (
        <ul className={css.Options}>
            <li>
                <button onClick={() => onUpdateFeedback('good')}>Good</button>
            </li>
            <li>
                <button onClick={() => onUpdateFeedback('neutral')}>
                    Neutral
                </button>
            </li>
            <li>
                <button onClick={() => onUpdateFeedback('bad')}>Bad</button>
            </li>
            {totalFeedback > 0 && (
                <li>
                    <button onClick={onResetFeedback}>Reset</button>
                </li>
            )}
        </ul>
    );
};

Options.propTypes = {
    onUpdateFeedback: PropTypes.func,
    totalFeedback: PropTypes.number,
    onResetFeedback: PropTypes.func,
};

export default Options;
