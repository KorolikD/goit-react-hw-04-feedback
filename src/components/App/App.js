import { Component } from 'react';
import { GlobalStyles } from 'styles';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evaluation => {
    this.setState(prevState => ({ [evaluation]: prevState[evaluation] + 1 }));
  };

  countTotalFeedback = obj =>
    Object.values(obj).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = obj => {
    const totalFeedback = this.countTotalFeedback(obj);
    const positiveFeedbackPercentage = (obj['good'] * 100) / totalFeedback;

    return Math.round(positiveFeedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      this.state
    );

    return (
      <>
        <GlobalStyles />

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
  }
}
