import React from "react"
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
  
  

export const Section = ({
  good,
  neutral,
  bad,
  title,
  onLeaveFeedback,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <h2>Statistics</h2>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </section>
  );
};

