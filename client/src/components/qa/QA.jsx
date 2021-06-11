import React, { useContext } from "react";
import Search from "./components/Search.jsx";
import { QaContext } from "../../store.jsx";

export default function QA() {
  const qa = useContext(QaContext);
  return (
    <>
      <h4>{"Questions & Answers"}</h4>
      <Search />
    </>
  );
}
