import React, { Component } from 'react';
import { Box } from 'components/Box';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = e => {
    console.dir(e.target.name);
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  render() {
    const stats = this.state;
    const total = stats.good + stats.neutral + stats.bad;
    const positivePercentage =
      total === 0 ? 0 : Math.round((100 * stats.good) / total);

    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.LeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={stats.good}
              neutral={stats.neutral}
              bad={stats.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Box>
    );
  }
}
