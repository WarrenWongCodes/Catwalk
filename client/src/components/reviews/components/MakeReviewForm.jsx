import React, { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

import PostReview from "../api/PostReview";
import { useInput } from "../utils/formInputHook.jsx";
import ReviewModal from "./ReviewModal";
import { ReviewsContext } from "../../../store";
import styles from "../styles/ReviewModals.module.css";
import buttons from "../../qa/styles/QuestionsList.module.css";
import dividers from "../styles/reviews.css";

const { fontSize, spacingStyles, modalHeader, modalFooter } = styles;
const { buttonSpacing } = buttons;
const { solid, reviewRow } = dividers;

const MakeReviewForm = () => {
  const { id } = useContext(ReviewsContext);
  const { value: rating, bind: bindRating, reset: resetRating } = useInput("");
  const {
    value: summary,
    bind: bindSummary,
    reset: resetSummary,
  } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");
  const {
    value: reccomend,
    bind: bindReccomend,
    reset: resetReccomend,
  } = useInput(true);
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: photos, bind: bindPhotos, reset: resetPhotos } = useInput([]);
  const {
    value: characteristics,
    bind: bindCharacteristics,
    reset: resetCharacteristics,
  } = useInput({});

  // const [ form, setForm ] = useState({
  //   product_id: 0,
  //   rating: 0,
  //   summary: '',
  //   body: '',
  //   recommend: true,
  //   name: '',
  //   email: '',
  //   photos: [],
  //   characteristics: {},
  // })

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });s

  const addAReviewHandler = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      product_id: Number(id),
      rating: rating,
      summary: summary,
      body: body,
      recommend: true,
      name: name,
      email: email,
      photos: [],
      characteristics: {},
    });
  };

  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const onClickInputChange = () => {
    const response = PostReview.post("/reviews", {
      data: data,
    })
      .then((response) => {
        if (_isMounted.current) {
          // console.log(response.status);
          resetRating();
          resetSummary();
          resetBody();
          resetRecommend();
          resetName();
          resetEmail();
          resetPhotos();
          resetCharacteristics();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form>
        <h2 className={spacingStyles}>Submit A Review</h2>
        <p className={`${spacingStyles} ${fontSize}`}></p>
        <label className={fontSize}>
          Rating
          <br />
          <input
            type="text"
            name="rating"
            placeholder="how many stars out of 5"
            {...bindRating}
          />
          <br />
        </label>
        <hr className={solid} />
        <br />

        <label className={fontSize}>
          Summary
          <input
            type="text"
            name="summary"
            placeholder="summary"
            {...bindSummary}
          />
        </label>
        <br />
        <hr className={solid} />
        <label className={fontSize}>
          Please write about your experience with our product:
          <br />
          <textarea name="body" {...bindBody}></textarea>
        </label>
        <br />
        <br />
        <label className={fontSize}>
          Would you recommend this product?
          <input
            type="checkbox"
            name="reccomend"
            checked="checked"
            {...bindReccomend}
          />
          <hr className={solid} />
        </label>
        <br />
        <label className={fontSize}>
          Name:
          <input
            type="text"
            name="name"
            placeholder="For privacy reasons, do not use your full name or email address"
            {...bindName}
          />
          <hr className={solid} />
        </label>
        <label className={fontSize}>
          Your Email:
          <br />
          <input type="text" name="email" {...bindEmail} />
          <hr className={solid} />
          <br />
          For authentication reasons, you will not be emailed
        </label>
        <br />
        <label className={fontSize}>
          Upload Photos*:
          <br />
          <input type="text" name="photos[photoUrl][]" {...bindPhotos} />
          <hr className={solid} />
          <br />
        </label>
        <label className={fontSize}>
          Characteristics:
          <br />
          <input
            type="text"
            name="characteristics{}{}"
            {...bindCharacteristics}
          />
          <br />
        </label>
        <hr className={solid} />
        <input
          className={`textButton ${buttonSpacing}`}
          onClick={(e) => addAReviewHandler(e)}
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default MakeReviewForm;

// const [isOpen, setIsOpen] = useState(false);
// return (
//   <>
//     <div style={ ButtonWrapper } onClick={() => console.log('clicked')} >
//       <button onClick={() => setIsOpen(true)}> Write A Review </button>
//       <ReviewModal open={isOpen} closeModal={ () => setIsOpen(false) }>
//         Fancy Modal
//       </ReviewModal>
//     </div>
//     <div style={ ContentStyles }>Content</div>
//   </>
// )

// var axios = require('axios');
// var data = JSON.stringify({
//   "product_id": 11001,
//   "rating": 3,
//   "summary": "I bought two!",
//   "body": "Do yourself a favor and buy this",
//   "recommend": true,
//   "name": "Choppy",
//   "email": "choppy@chop.com",
//   "photos": [],
//   "characteristics": {}
// });

// var config = {
//   method: 'post',
//   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews',
//   headers: {
//     'Authorization': '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',
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });s
