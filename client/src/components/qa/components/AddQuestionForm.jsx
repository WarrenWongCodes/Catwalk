import React, { useContext } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import KEYS from "../../../../../config";
import { useInput } from "../utils/formInputHook";
import { QaContext } from "../../../store";

export default function AddQuestionForm() {
  const { id } = useContext(QaContext);
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");

  const addAQuestionHandler = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      body: body,
      name: name,
      email: email,
      product_id: Number(id),
    });

    let config = {
      method: "post",
      url: `${KEYS.ENDPOINT}/qa/questions`,
      headers: {
        Authorization: `${KEYS.API_KEY}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response.status);
        resetName();
        resetBody();
        resetEmail();
      })
      .catch((error) => alert("Incorrect Email Address"));
  };

  return (
    <form>
      <label>
        Your Question*:
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
        <br />
        <input type="text" name="email" {...bindEmail} />
        <br />
        For authentication reasons, you will not be emailed
      </label>
      <br />
      <br />
      <input
        onClick={(e) => addAQuestionHandler(e)}
        type="submit"
        value="Submit"
      />
    </form>
  );
}
