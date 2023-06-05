import React from "react"
import PropTypes from 'prop-types';  


export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        name="good"
        onClick={onLeaveFeedback}
        style={{ height: '40px', width: '100px' }}
      >
        Good
      </button>
      <button
        name="neutral"
        onClick={onLeaveFeedback}
        style={{ height: '40px', width: '100px' }}
      >
        Neutral
      </button>
      <button
        name="bad"
        onClick={onLeaveFeedback}
        style={{ height: '40px', width: '100px' }}
      >
        Bad
      </button>
    </div>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};