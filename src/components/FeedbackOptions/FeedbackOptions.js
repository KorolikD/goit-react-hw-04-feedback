import React from 'react';

import { capitalLetterWord } from 'helpers/capitalLetterWord';
import { Button, Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {Object.keys(options).map(evaluation => (
        <Button
          key={evaluation}
          type="button"
          name={evaluation}
          onClick={() => {
            onLeaveFeedback(evaluation);
          }}
        >
          {capitalLetterWord(evaluation)}
        </Button>
      ))}
    </Buttons>
  );
};
