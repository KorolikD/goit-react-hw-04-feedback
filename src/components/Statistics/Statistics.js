// import { capitalLetterWord } from 'helpers/capitalLetterWord';
import React from 'react';
import { StatisticsItems } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsItems>
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        {total !== 0 && <p>Total: {total}</p>}
        {total !== 0 && <p>Positive feedback: {positivePercentage}</p>}
      </>
    </StatisticsItems>
  );
};
