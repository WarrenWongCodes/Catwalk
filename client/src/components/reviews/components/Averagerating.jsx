import React, { useContext, useState, useEffect } from 'react';
import { MetaContext } from '../../../store.jsx';
import { Rating, Container } from 'semantic-ui-react';
import StarRating from './StarRatings';
import RatingBars from './RatingBars';
import Recommend from './Recommend';
import SizeSlider from './SizeSlider';

const AveRatingDisp = (props) => {

  const meta = useContext(MetaContext);
  const ratings = meta.ratings;
  const [ave, setAve] = useState(0);

  const Ave = (props) => {
    const ratingsArr = [];
    let totalRatings = 0;
    let display = 0;
    if (ratings !== undefined) {
      for (let key in ratings) {
        ratingsArr.push(parseInt(key) * parseInt(ratings[key]));
        totalRatings += parseInt(ratings[key]);
      }
      display = ratingsArr.reduce((acc, rating) => {
        return acc + rating / totalRatings;
      }, 0);
    };
    useEffect(() => {
      setAve(Math.ceil(display * 4) / 4);
    })
    // check docs about second param for useEffect

    return Math.ceil(display * 4) / 4;
  };

  return (
    <div>
      <h3 className='ratingsHeadline'>RATINGS & REVIEWS</h3>
      <div className='disp'>
        <Ave />
        <StarRating rating={ave}/>
      </div>
      <div>
        <Recommend />
      </div>
      <RatingBars />
      <div>
        <SizeSlider />
      </div>
    </div>
  );
};

export default AveRatingDisp;
