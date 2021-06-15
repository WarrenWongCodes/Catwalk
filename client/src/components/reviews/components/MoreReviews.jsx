import React, { useContext } from 'react';
import '../styles/reviews.css';
import CallMoreReviews from '../api/CallMoreReviews';


const MoreReviews = () => {

  const onClickInputChange = () => {
    const response = CallMoreReviews.get("/reviews/", {
      params: {
        count: 100,
        product_id: 11001,
      }
    })
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <>
      <button onClick={onClickInputChange}> More Reviews </button>
    </>
  );
};

export default MoreReviews;