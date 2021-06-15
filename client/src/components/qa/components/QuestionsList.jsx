import React, { useContext, useRef } from "react";
import axios from "axios";
import { QaContext } from "../../../store.jsx";
import KEYS from "/config.js";
import Questions from "./Questions.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";

export default function QuestionsList({ query }) {
  const qa = useContext(QaContext);
  const questionModal = useRef(null);

  let qaData = [...qa];
  let qCount = 2; // Defaults to 2 questions
  if (qaData.length > 1) {
    // when 'more answered questions' is clicked, increase counter by 2
    // when collapse, reset counter to 2
    qaData = qaData.slice(0, qCount);
  }

  if (query.length > 2) {
    let newData = [];
    for (let question of qa) {
      if (question.question_body.includes(query)) {
        newData.push(question);
      }
    }
    qaData = newData;
  }

  return (
    <>
      <section>
        {qaData.map((q, i) => {
          let answers = Object.values(q.answers);
          return <Questions answers={answers} question={q} key={i} />;
        })}
        <br />
        <br />
        {qaData.length > 1 ? <button>More Answered Questions</button> : null}
        <button onClick={() => questionModal.current.open()}>
          Add a Question +
        </button>
        <AddQuestionForm ref={questionModal} />
      </section>
    </>
  );
}
