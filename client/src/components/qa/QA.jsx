import React, { useState } from 'react';
import Search from './components/Search.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import styles from './QA.module.css';

const { flexContainer } = styles;

export default function QA() {
  const [query, setQuery] = useState('');

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`container ${flexContainer}`}>
      <br></br>
      <br></br>
      <h2>{'Questions & Answers'}</h2>
      <Search search={searchChangeHandler} />
      <QuestionsList query={query} />
    </div>
  );
}
