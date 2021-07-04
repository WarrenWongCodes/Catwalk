import React, { useContext } from 'react';
import axios from 'axios';
import KEYS from '../../../../../config';
import { useInput } from '../utils/formInputHook';
import { QaContext } from '../../../store';
import styles from '../styles/Forms.module.css';

const { fontSize, spacingStyles } = styles;

export default function AddQuestionForm() {
  const { id, product } = useContext(QaContext);
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: body, bind: bindBody, reset: resetBody } = useInput('');

  const addAQuestionHandler = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      body: body,
      name: name,
      email: email,
      product_id: Number(id),
    });

    if (body.length < 1) {
      alert('You must enter a question');
      return;
    } else if (name.length < 1) {
      alert('You must enter a name');
      return;
    } else if (!email.includes('@') && !email.includes('.com')) {
      alert('You must enter a valid email address Ex: joe123@gmail.com');
      return;
    }

    let config = {
      method: 'post',
      url: `${KEYS.ENDPOINT}/qa/questions`,
      headers: {
        Authorization: `${KEYS.API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        resetName();
        resetBody();
        resetEmail();
        alert('Successfully added Answer');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2 className={spacingStyles}>Ask Your Question</h2>
      <p className={`${spacingStyles} ${fontSize}`}>
        {`About ${product.name}`}
      </p>
      <form>
        <label className={fontSize}>
          Your Question*:
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
          <br />
          Your Email*:
          <br />
          <input
            placeholder="For authentication reasons, you will not be emailed"
            type="text"
            name="email"
            {...bindEmail}
          />
          <br />
        </label>
        <br />
        <br />
        <button className={fontSize} onClick={(e) => addAQuestionHandler(e)}>
          Submit
        </button>
      </form>
    </>
  );
}
