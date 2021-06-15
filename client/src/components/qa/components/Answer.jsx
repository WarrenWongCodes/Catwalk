import React from "react";
import { helpfulAnswer, reportAnswer } from "../utils/helperFunctions";

export default function Answer({ a }) {
  return (
    <>
      <span>{a.body}</span>
      <section>
        <span>{`by ${a.answerer_name}, ${a.date.slice(0, 10)} |`}</span>
        <span>Helpful?</span>
        <span onClick={() => helpfulAnswer(a.id)} className="link">
          Yes
        </span>
        <span>{`(${a.helpfulness}) |`}</span>
        <span onClick={() => reportAnswer(a.id)} className="link">
          Report
        </span>
      </section>
    </>
  );
}
