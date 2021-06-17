import React, { useState } from "react";
import Search from "./components/Search.jsx";
import QuestionsList from "./components/QuestionsList.jsx";
import { QaContext } from "../../store.jsx";
import styles from "./QA.module.css";

const { flexContainer } = styles;

export default function QA() {
  const [query, setQuery] = useState("");

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`container ${flexContainer}`}>
      <h4>{"Questions & Answers"}</h4>
      <Search search={searchChangeHandler} />
      <QuestionsList query={query} />
    </div>
  );
}
