import React, { useContext } from 'react';
import { MetaContext } from '../../../store.jsx';
import '../styles/reviews.css';

let results = {};

const Recommend = () => {
  const meta = useContext(MetaContext);
  let percentageRecommended = 0;

  if (meta.recommended !== undefined) {
    results = meta.recommended;
    let totalResults = parseInt(results.true) + parseInt(results.false);
    let positive = Math.ceil((parseInt(results.true) / totalResults) * 100);
    percentageRecommended = positive;
  }

  if (typeof percentageRecommended !== 'number') {
    return (
      <div>
        <div>There are no reviews for this product</div>
      </div>
    );
  } else {
    return (
      <>
        <div>{percentageRecommended}% of reviews recomend this product</div>
      </>
    );
  }
};

export default Recommend;
