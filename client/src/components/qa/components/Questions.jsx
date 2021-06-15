import React from "react";
import {
  helpfulQuestion,
  reportQuestion,
  helpfulAnswer,
  reportAnswer,
  showMoreAnswers,
} from "../utils/helperFunctions";

export default function Questions({ question, answers }) {
  // TODO: Sort the Answers by SELLER first
  answers.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });

  // Limit by 2 answers only
  let aCount = 2;
  let aData = answers.slice(0);
  if (answers.length > 1) {
    aData = aData.slice(0, aCount);
  }

  return (
    <>
      <section>
        <span>{`Q: ${question.question_body}`}</span>
        <span>Helpful?</span>
        <span
          onClick={() => helpfulQuestion(question.question_id)}
          className="link"
        >{`Yes (${question.question_helpfulness}) |`}</span>
        <span
          onClick={() => reportQuestion(question.question_id)}
          className="link"
        >
          Report
        </span>
        <span className="link">Add Answer</span>
      </section>
      <span>A: </span>
      {aData.map((a, i) => {
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
      })}
      {/* TODO: on click, increase the answer count by 2 and can scroll*/}
      {answers.length > 2 ? <button>See more answers</button> : null}
      <br />
    </>
  );
}
