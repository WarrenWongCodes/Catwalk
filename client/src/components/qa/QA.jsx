import React, { useState } from "react";
import Search from "./components/Search.jsx";
import QuestionsList from "./components/QuestionsList.jsx";
import { QaContext } from "../../store.jsx";

export default function QA() {
  const [query, setQuery] = useState("");

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h4>{"Questions & Answers"}</h4>
      <Search search={searchChangeHandler} />
      <QuestionsList query={query} />
    </>
  );
}
