import React from "react"
import PropTypes from 'prop-types';  
import { FeedbackDiv, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackDiv>
      <Button name="good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button name="bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </FeedbackDiv>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};