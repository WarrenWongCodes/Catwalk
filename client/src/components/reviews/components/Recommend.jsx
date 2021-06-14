import React, { useContext } from 'react';
import { MetaContext } from '../../../store.jsx';

let results = {}

const Recommend = () => {
  const meta = useContext(MetaContext);
  let percentageRecommended = 0;

  if (meta.recommended !== undefined) {
    results = meta.recommended;
    let totalResults = parseInt(results.true) + parseInt(results.false);
    let positive = Math.ceil((parseInt(results.true) / totalResults) * 100);
    percentageRecommended = positive;
  }

  console.log('results: ', results);

  return (
    <>
      <div>{percentageRecommended}% of reviews reccomend this product</div>
    </>
  )

};

export default Recommend;