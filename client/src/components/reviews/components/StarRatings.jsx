import React, { useContext } from 'react';
import { Container, Rating } from 'semantic-ui-react';
import { MetaContext } from '../../../store.jsx';




const StarRating = (props) => {
  const meta = useContext(MetaContext);
  const ratings = meta.ratings;

  // console.log('meta: ', ratings)
  // console.log('ratingsObj: ', ratingsObj);
  // console.log('starProps: ', props)
  let rating = {
    "--rating": props.rating,
  };

  // console.log('rating: ', rating['--rating'])
  return (
    <div className='starContainer'>
      <div className='star' style={{...rating}}>
        {/* {console.log('rating: ', rating)} */}
      </div>
    </div>
  )
};

export default StarRating;

