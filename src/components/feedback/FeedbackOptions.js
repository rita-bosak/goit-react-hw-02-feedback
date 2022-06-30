import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <button
    type="button"
    onClick={() => onLeaveFeedback(options.toLowerCase())}
    key={options}
  >
    {options}
  </button>
);

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
