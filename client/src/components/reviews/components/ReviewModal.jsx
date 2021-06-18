import React from "react";
import ReactDom from "react-dom";
import styles from "../styles/ReviewModals.module.css";
import buttons from "../../qa/styles/QuestionsList.module.css";
import dividers from "../styles/reviews.css";

const { modalStyles, overlayStyles } = styles;
const { buttonSpacing } = buttons;
const { solid, reviewRow } = dividers;

export default function ReviewModal({ open, children, closeModal }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div className={overlayStyles}>
        <div className={modalStyles}>
          <button
            className={`textButton ${buttonSpacing}`}
            onClick={closeModal}
          >
            {" "}
            Close Modal
          </button>
          {children}
        </div>
        <br />
      </div>
    </>,
    document.getElementById("reviewPortal")
  );
}
