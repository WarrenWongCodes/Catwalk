import React from "react";
import styles from "../styles/Search.module.css";

export default function Search({ search }) {
  return (
    <>
      <input
        id="searchText"
        className={styles.searchBar}
        type="text"
        placeholder="Have a question? Search for answers…"
        onChange={search}
      ></input>
    </>
  );
}
