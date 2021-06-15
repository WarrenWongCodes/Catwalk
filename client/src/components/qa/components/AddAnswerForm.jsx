import React from "react";
import axios from "axios";
import { useInput } from "../utils/formInputHook";
import KEYS from "../../../../../config";

export default function AddAnswerForm() {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");
  // TODO: state for photos?

  const addAnswerHandler = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      body: body,
      name: name,
      email: email,
      photos: [],
    });
    // TODO: need QUESTION id ON CLICK
    let config = {
      url: `${KEYS.ENDPOINT}/qa/questions/212700/answers`,
      method: "post",
      headers: {
        Authorization: `${KEYS.API_KEY}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((result) => {
        console.log(result.status);
        resetName();
        resetBody();
        resetEmail();
      })
      .catch((err) => {
        console.log(err, "Failed to add answer");
        alert("Incorrect Email Address");
      });
  };

  return (
    <>
      <h3>Submit your Answer</h3>
      <br />
      <h4>Product Name: Question Body</h4>
      <br />
      <form onSubmit={addAnswerHandler}>
        <label>
          Your Answer*:
          <br />
          <textarea name="body" {...bindBody}></textarea>
        </label>
        <br />
        <br />
        <label>
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
        <br />
        <label>
          Your Email*:
          <br />
          <input type="text" name="email" {...bindEmail} />
          <br />
          For authentication reasons, you will not be emailed
        </label>
        <br />
        <br />
        <label>
          Upload your photos:
          <br />
          <br />
          <input type="submit" name="photos" value="Add Photos" />
          <br />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
