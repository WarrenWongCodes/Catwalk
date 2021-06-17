import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { QaContext } from "../../../store.jsx";
import Questions from "./Questions.jsx";
import QuestionModal from "./QuestionModal.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";
import AnswerModal from "./AnswerModal.jsx";
import AddAnswerForm from "../components/AddAnswerForm.jsx";
import styles from "../styles/FormModals.module.css";
import QuestionListStyles from "../styles/QuestionsList.module.css";
import metaDataStyles from "../styles/MetaData.module.css";

const { buttonSpacing } = QuestionListStyles;
const { buttonWrapperStyles } = styles;
const { scrollQA, spreadContainer } = metaDataStyles;

export default function QuestionsList({ query }) {
  const { qa, id } = useContext(QaContext);

  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [numOfQuestions, setQuestionDisplay] = useState(2);
  const [showScrollView, setScrollView] = useState(false);

  let qaData = [...qa];
  let availableQCount = qa.length;

  if (qaData.length > 1) {
    qaData = qaData.slice(0, numOfQuestions);
  }

  if (query.length > 2) {
    let newData = [];
    for (let question of qa) {
      query = query.toLowerCase();
      if (question.question_body.includes(query)) {
        newData.push(question);
      }
    }
    qaData = newData;
  }

  const showMoreQuestions = () => {
    if (numOfQuestions > 3) {
      setScrollView(true);
    }
    setQuestionDisplay(numOfQuestions + 2);
  };

  const questionHandler = (q) => {
    setIsOpenAnswer(true);
    setCurrentQuestion(q);
  };

  return (
    <>
      <section className={`${showScrollView ? scrollQA : ""}`}>
        {qaData.map((q, i) => {
          let answers = Object.values(q.answers);
          return (
            <Questions
              setOpen={questionHandler}
              answers={answers}
              question={q}
              key={i}
            />
          );
        })}
        <br />
        <br />
        {qaData.length > 1 && numOfQuestions < availableQCount ? (
          <button
            onClick={showMoreQuestions}
            className={`textButton ${buttonSpacing}`}
          >
            MORE ANSWERED QUESTIONS
          </button>
        ) : null}

        <button className="textButton" onClick={() => setIsOpenQuestion(true)}>
          ADD A QUESTION +
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
            <AddAnswerForm question={currentQuestion} />
          </AnswerModal>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}
