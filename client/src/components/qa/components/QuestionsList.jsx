import React, { useContext, useState } from "react";
import axios from "axios";
import { QaContext } from "../../../store.jsx";
import Questions from "./Questions.jsx";
import QuestionModal from "./QuestionModal.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";
import AnswerModal from "./AnswerModal.jsx";
import AddAnswerForm from "../components/AddAnswerForm.jsx";
import styles from "../styles/FormModals.module.css";

const { buttonWrapperStyles } = styles;

export default function QuestionsList({ query }) {
  const { qa, id } = useContext(QaContext);

  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);

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
          return (
            <Questions
              setOpen={setIsOpenAnswer}
              answers={answers}
              question={q}
              key={i}
            />
          );
        })}
        <br />
        <br />
        {qaData.length > 1 ? <button>More Answered Questions</button> : null}

        <button onClick={() => setIsOpenQuestion(true)}>
          Add a Question +
        </button>

        <div className={buttonWrapperStyles}>
          <QuestionModal
            open={isOpenQuestion}
            onClose={() => setIsOpenQuestion(false)}
          >
            <AddQuestionForm />
          </QuestionModal>
          <AnswerModal
            open={isOpenAnswer}
            onClose={() => setIsOpenAnswer(false)}
          >
            <AddAnswerForm />
          </AnswerModal>
        </div>
      </section>
    </>
  );
}
