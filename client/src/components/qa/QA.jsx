import React, { useContext, useState } from "react";
import Search from "./components/Search.jsx";
import QuestionsList from "./components/QuestionsList.jsx";
import { QaContext } from "../../store.jsx";

export default function QA() {
  const [query, setQuery] = useState("");
  const qa = useContext(QaContext);

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  // TODO: filter the qa data
  if (query.length > 2) {
    // console.log(query);
    // console.log("entire QA:", qa);
    // look at the question AND answer body for entire list
    // validate with a REGEX expression for 50% match to query
    // if passes the test, then keep that in the qa list
  }

  return (
    <>
      <h4>{"Questions & Answers"}</h4>
      <Search search={searchChangeHandler} />
      <QuestionsList />
    </>
  );
}
