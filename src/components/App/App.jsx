import React from 'react';
import { FeedbackTitle } from '../../components/FeedbackTitle/FeedbackTitle';
import { FeedbackButtons } from '../../components/FeedbackButtons/FeedbackButtons';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackTitle />
      <FeedbackButtons />
    </div>
  );
};
