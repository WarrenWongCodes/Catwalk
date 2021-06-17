import React, { useContext } from "react";
import axios from "axios";
import { useInput } from "../utils/formInputHook";
import KEYS from "../../../../../config";
import { QaContext } from "../../../store";
import styles from "../styles/Forms.module.css";

const { fontSize, spacingStyles } = styles;

export default function AddAnswerForm({ question }) {
  const { product } = useContext(QaContext);
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");
  const { value: photo, bind: bindPhoto, reset: resetPhoto } = useInput("");

  const addAnswerHandler = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      body: body,
      name: name,
      email: email,
      photos: [photo],
    });

    console.log(data.photos);

    if (body.length < 1) {
      alert("You must enter a question");
      return;
    } else if (name.length < 1) {
      alert("You must enter a name");
      return;
    } else if (!email.includes("@")) {
      alert("You must enter a valid email address");
      return;
    } else if (!photo.includes("http")) {
      alert("You must enter a valid image link");
      return;
    }

    let config = {
      url: `${KEYS.ENDPOINT}/qa/questions/${question.question_id}/answers`,
      method: "post",
      headers: {
        Authorization: `${KEYS.API_KEY}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((result) => {
        resetName();
        resetBody();
        resetEmail();
        resetPhoto();
        alert("Successfully added Answer");
      })
      .catch((err) => console.log(err, "Failed to add answer"));
  };

  return (
    <>
      <h2 className={spacingStyles}>Submit your Answer</h2>
      <p className={`${spacingStyles} ${fontSize}`}>
        {`${product.name}: ${question.question_body}`}
      </p>
      <form>
        <label className={fontSize}>
          Your Answer*:
          <br />
          <textarea name="body" {...bindBody}></textarea>
        </label>
        <br />
        <label className={fontSize}>
          What is your nickname*:
          <br />
          <input
            type="text"
            name="name"
            placeholder="For privacy reasons, do not use your full name or email address"
            {...bindName}
          />
        </label>
        <br />
        <label className={fontSize}>
          Your Email*:
          <br />
          <input type="text" name="email" {...bindEmail} />
          <br />
          For authentication reasons, you will not be emailed
        </label>
        <br />
        <br />
        <label className={fontSize}>
          Upload your photos:
          <br />
          <input type="text" name="photo" {...bindPhoto} />
          <br />
        </label>
        <br />
        <button onClick={addAnswerHandler} className={fontSize}>
          Submit
        </button>
      </form>
    </>
  );
}
