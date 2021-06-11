import React, { useContext, useState } from "react";
import Search from "./components/Search.jsx";
import { QaContext } from "../../store.jsx";

export default function QA() {
  const [query, setQuery] = useState("");
  const qa = useContext(QaContext);

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h4>{"Questions & Answers"}</h4>
      <Search search={searchChangeHandler} />
    </>
  );
}
