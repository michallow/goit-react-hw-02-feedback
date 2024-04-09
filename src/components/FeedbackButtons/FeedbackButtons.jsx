import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackButtons.module.css';

export const FeedbackButtons = ({ BtnGood, BtnNeutral, BtnBad }) => {
    // Stan lokalny do śledzenia liczby kliknięć dla każdej opcji
    const [goodCount, setGoodCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [badCount, setBadCount] = useState(0);

    return (
        <div className={css.buttonsContainer}>
            <button className={css.button} onClick={() => { BtnGood(); setGoodCount(prevCount => prevCount + 1); }}>Good ({goodCount})</button>
            <button className={css.button} onClick={() => { BtnNeutral(); setNeutralCount(prevCount => prevCount + 1); }}>Neutral ({neutralCount})</button>
            <button className={css.button} onClick={() => { BtnBad(); setBadCount(prevCount => prevCount + 1); }}>Bad ({badCount})</button>
        </div>
    );
}

FeedbackButtons.propTypes = {
    BtnGood: PropTypes.func.isRequired,
    BtnNeutral: PropTypes.func.isRequired,
    BtnBad: PropTypes.func.isRequired,
};