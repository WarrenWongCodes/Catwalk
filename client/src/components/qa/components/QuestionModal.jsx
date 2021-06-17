import React from "react";
import { createPortal } from "react-dom";
import styles from "../styles/FormModals.module.css";
const { modalStyles, overlayStyles } = styles;

export default function QuestionModal({ children, open, onClose }) {
  if (!open) return null;
  return createPortal(
    <>
      <div className={overlayStyles} />
      <div className={modalStyles}>
        <button onClick={onClose}>X</button>
        {children}
        <br />
      </div>
    </>,
    document.getElementById("portal")
  );
}
