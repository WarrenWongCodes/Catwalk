import React, { useContext } from "react";
import axios from "axios";
import { QaContext } from "../../../store.jsx";
import KEYS from "/config.js";

export default function QuestionsList() {
  const qa = useContext(QaContext);
  let qaData = [...qa];
  let qCount = 2;
  if (qaData.length > 1) {
    // when 'more answered questions' is clicked, increase counter by 2
    // when collapse, reset counter to 2
    qaData = qaData.slice(0, qCount);
  }

  const options = {
    baseURL: `${KEYS.ENDPOINT}`,
    headers: {
      Authorization: `${KEYS.API_KEY}`,
    },
  };

  // TODO: 405 method not allowed
  const helpfulQuestion = (questionId) => {
    console.log(questionId);
    let count = {};
    count[questionId] = ++count[questionId] || 0;

    if (count[questionId] === 0) {
      count[questionId]++;
      axios
        .put(`/qa/questions/${questionId}/helpful`, options)
        .then((res) => console.log(res, "Updated Question Helpfulness"))
        .catch((err) => console.log(err));
    }
  };

  const reportQuestion = (questionId) => {
    console.log(questionId);
    let count = {};
    count[questionId] = ++count[questionId] || 0;

    if (count[questionId] === 0) {
      count[questionId]++;
      axios
        .put(`/qa/questions/${questionId}/report`, options)
        .then((res) => console.log(res, "Successfully Reported Question"))
        .catch((err) => console.log(err));
    }
  };

  const helpfulAnswer = (answerId) => {
    console.log(answerId);
    let count = {};
    count[answerId] = ++count[answerId] || 0;

    if (count[answerId] === 0) {
      count[answerId]++;
      axios
        .put(`/qa/answers/${answerId}/helpful`, options)
        .then((res) => console.log(res, "Updated Answer Helpfulness"))
        .catch((err) => console.log(err));
    }
  };

  const reportAnswer = (answerId) => {
    console.log(answerId);
    let count = {};
    count[answerId] = ++count[answerId] || 0;

    if (count[answerId] === 0) {
      count[answerId]++;
      axios
        .put(`/qa/answers/${answerId}/report`, options)
        .then((res) => console.log(res, "Successfully Reported Answer"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <section>
        {qaData.map((q, i) => {
          let answers = Object.values(q.answers);
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
                <span key={i}>{`Q: ${q.question_body}`}</span>
                <span>Helpful?</span>
                <span
                  onClick={() => helpfulQuestion(q.question_id)}
                  className="link"
                >{`Yes (${q.question_helpfulness}) |`}</span>
                <span
                  onClick={() => reportQuestion(q.question_id)}
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
                    <span key={i}>{a.body}</span>
                    <section>
                      <span>{`by ${a.answerer_name}, ${a.date.slice(
                        0,
                        10
                      )} |`}</span>
                      <span>Helpful?</span>
                      <span
                        onClick={() => helpfulAnswer(a.id)}
                        className="link"
                      >
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
        })}
      </section>
    </>
  );
}
