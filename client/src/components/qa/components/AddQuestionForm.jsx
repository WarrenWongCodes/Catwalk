import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import "../styles/AddQuestionForm.module.css";

const questionModalElement = document.getElementById("modal-question");

const AddQuestionForm = function (
  { fade = false, defaultOpened = false },
  ref
) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);
  // exposes methods to parent component
  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (e) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? "modal-fade" : ""}`}>
        <div className="modal-overlay" onClick={close} />
        <span
          role="button"
          className="modal-close"
          aria-label="close"
          onClick={close}
        >
          x
        </span>
        <div className="modal-body">
          <form>
            <label>
              Your Question*:
              <br />
              <textarea></textarea>
            </label>
            <br />
            <br />
            <label>
              What is your nickname*:
              <br />
              <input
                type="text"
                name="nickname"
                placeholder="For privacy reasons, do not use your full name or email address"
              />
            </label>
            <br />
            <br />
            <label>
              Your Email*:
              <br />
              <br />
              <input type="text" name="email" />
              <br />
              For authentication reasons, you will not be emailed
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    ) : null,
    questionModalElement
  );
};

// forward reference to modal component
export default forwardRef(AddQuestionForm);
