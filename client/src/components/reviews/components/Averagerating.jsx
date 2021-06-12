import React, { useContext, useState } from 'react';
import { MetaContext } from '../../../store.jsx';
import { Rating, Container } from 'semantic-ui-react';

const AveRatingDisp = () => {

  const meta = useContext(MetaContext);
  const ratings = meta.ratings;

  const Ave = () => {
    const ratingsArr = [];
    let display = 0;
    if (ratings !== undefined) {
      for (let key in ratings) {
        ratingsArr.push(parseInt(key) * parseInt(ratings[key]));
      }
      display = ratingsArr.reduce((acc, rating) => {
        return acc + rating / 5;
      }, 0);
    }
    return display;
  };

  return (
    <div>
      <h3 className='ratingsHeadline'>RATINGS & REVIEWS</h3>
      <div className='disp'>
        <Ave />
      </div>
    </div>
  );
};

export default AveRatingDisp;
