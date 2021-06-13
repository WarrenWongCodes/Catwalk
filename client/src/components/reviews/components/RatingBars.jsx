import React, { useContext, useState, useEffect } from 'react';
import { MetaContext } from '../../../store.jsx';



const RatingBars = () => {
  const meta = useContext(MetaContext);
  // const [ratings, setRatings] = useState({});
  // console.log('meta: ', meta.ratings);

  const ratings = {}

  const Bar = (props) => {
    console.log('barprops: ', props)
    let percent = props.percent * 10;
    console.log(percent)
    let style = {
      width: percent,
    }
    return (
      <>
        <div className='row'>
          <div className='leftSide'>
            <div>{props.star} Stars</div>
          </div>
          <div className='center'>
            <div className='barContainer'>
              <div className='bar' style={{...style}}></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (meta.ratings !== undefined) {
    console.log('meta.ratings: ', meta.ratings[4])
    for (let i = 1; i <= 5; i++) {
      if (meta.ratings[i] === undefined) {
        ratings[i] = 0;
      } else {
        ratings[i] = meta.ratings[i];
      }
    }
    console.log('ratings', ratings);
  }

  console.log(Object.entries(ratings));

  const ratingsArr = Object.entries(ratings);

  const RatingsList = ratingsArr.map((item) => {
    return <Bar key={item[0][0]} star={item[0][0]} percent={item[1]} />
  })

  return (
    <>
       <div>Bars</div>
       <div>
         {RatingsList}
       </div>
    </>
  )
}

export default RatingBars;