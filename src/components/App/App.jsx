import { useEffect, useState } from 'react';
import css from './App.module.css';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = JSON.parse(
            window.localStorage.getItem('saved-feedback')
        );
        if (savedFeedback !== null) {
            return savedFeedback;
        }

        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });

    useEffect(() => {
        window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
    }, [feedback]);

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    return (
        <div className={css.App}>
            <h1>Sip Happens Café</h1>
            <p>
                Please leave your feedback about our service by selecting one of
                the options below.
            </p>
            <Options
                onUpdateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                onResetFeedback={resetFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification />
            )}
        </div>
    );
}

export default App;
