import React, { useState } from 'react';
import { helpfulAnswer, reportAnswer } from '../utils/helperFunctions';
import { IoIosCheckmark } from 'react-icons/io';
import answerStyles from '../styles/Answer.module.css';
import metaDataStyles from '../styles/MetaData.module.css';

const { font, imageDetails } = answerStyles;
const { metaData, link } = metaDataStyles;

export default function Answer({ a }) {
  const [isShowingHelpful, setDisplayHelpful] = useState(true);
  const [isShowingReported, setDisplayReported] = useState(true);

  const helpfulDisplayHandler = () => {
    helpfulAnswer(a.id);
    setDisplayHelpful(false);
  };

  const reportDisplayHandler = () => {
    reportAnswer(a.id);
    setDisplayReported(false);
  };

  let date = a.date.slice(0, 10);
  let months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  let newDate = `${months[date.slice(5, 7)]} ${date.slice(8)} , ${date.slice(
    0,
    4
  )}`;

  return (
    <span>
      <span className={font}>{a.body}</span>
      <section className={metaData}>
        <div>
          {a.photos.length > 0
            ? a.photos.map((photo, i) => {
                return (
                  <img
                    className={imageDetails}
                    key={i}
                    src={photo}
                    alt=""
                  ></img>
                );
              })
            : null}
        </div>
        <span>{`by ${a.answerer_name}, ${newDate} | `}</span>
        <span>{'Helpful? '}</span>
        {isShowingHelpful ? (
          <span onClick={() => helpfulDisplayHandler()} className={link}>
            {`Yes (${a.helpfulness})`}
          </span>
        ) : (
          <span>
            {' '}
            <IoIosCheckmark />{' '}
          </span>
        )}
        <span>{' | '}</span>
        {isShowingReported ? (
          <span onClick={() => reportDisplayHandler()} className={link}>
            Report
          </span>
        ) : (
          <span>Reported</span>
        )}
      </section>
    </span>
  );
}
