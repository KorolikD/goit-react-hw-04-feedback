import { useState } from 'react';
import { GlobalStyles } from 'styles';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evaluation => {
    switch (evaluation) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw Error('You should chose evaluation!');
    }
  };

  const countTotalFeedback = obj =>
    Object.values(obj).reduce((acc, el) => acc + el, 0);

  const countPositiveFeedbackPercentage = obj => {
    const totalFeedback = countTotalFeedback(obj);
    const positiveFeedbackPercentage = (obj['good'] * 100) / totalFeedback;

    return Math.round(positiveFeedbackPercentage);
  };

  const state = {
    good,
    neutral,
    bad,
  };
  const totalFeedback = countTotalFeedback(state);
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(state);

  return (
    <>
      <GlobalStyles />

      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
