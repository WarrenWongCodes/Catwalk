import React, { useState } from "react";

export default () => {
  const [query, setQuery] = useState("");
  // filter qa data based off query
  // save the query string in local state, pass the query to the view
  return (
    <input
      type="text"
      placeholder="Have a question? Search for answers…"
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
};
