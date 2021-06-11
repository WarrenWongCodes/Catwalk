import React from "react";

export default function Search({ search }) {
  return (
    <input
      type="text"
      placeholder="Have a question? Search for answers…"
      onChange={search}
    ></input>
  );
}
