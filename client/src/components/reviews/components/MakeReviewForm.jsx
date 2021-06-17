import React, { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

import PostReview from "../api/PostReview";
import { useInput } from "../utils/formInputHook.jsx";
import ReviewModal from "./ReviewModal";
import { ReviewsContext } from "../../../store";
// import { Container, Divider, Comment } from "semantic-ui-react";
import "../styles/reviews.css";

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
          console.log(response.status);
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
    <form>
      <label>
        Rating
        <br />
        <input
          type="text"
          name="rating"
          placeholder="how many stars out of 5"
          {...bindRating}
        />
      </label>
      <br />
      <br />
      <label>
        Summary
        <br />
        <input
          type="text"
          name="summary"
          placeholder="summary"
          {...bindSummary}
        />
      </label>
      <br />
      <br />
      <label>
        Please write about your experience with our product:
        <br />
        <textarea name="body" {...bindBody}></textarea>
      </label>
      <br />
      <br />
      <label>
        Would you reccomend this product?
        <br />
        <input
          type="checkbox"
          name="reccomend"
          checked="checked"
          {...bindReccomend}
        />
      </label>
      <br />
      <br />
      <label>
        Name*:
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
      <label>
        Upload Photos*:
        <br />
        <br />
        <input type="text" name="photos[photoUrl][]" {...bindPhotos} />
        <br />
      </label>
      <br />
      <br />
      <label>
        Characteristics:
        <br />
        <br />
        <input
          type="text"
          name="characteristics{}{}"
          {...bindCharacteristics}
        />
        <br />
      </label>
      <br />
      <br />
      <input
        onClick={(e) => addAReviewHandler(e)}
        type="submit"
        value="Submit"
      />
    </form>
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
