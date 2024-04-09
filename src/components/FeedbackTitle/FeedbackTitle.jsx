import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackTitle.module.css';

export const FeedbackTitle = ({ title }) => {
  return (
    <div className={css.title}>
      {title || "Please leave feedback"}
    </div>
  );
};

FeedbackTitle.propTypes = {
  title: PropTypes.string,
};