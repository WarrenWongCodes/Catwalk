import React, { useContext, useState, useEffect } from 'react';
import { MetaContext } from '../../../store.jsx';
import styles from '../styles/RatingsBars.module.css';



const { center, column } = styles;

const RatingBars = () => {
  const meta = useContext(MetaContext);

  const ratings = {}

  const Bar = (props) => {
    let percent = props.percent * 100 ;
    let style = {
      width: `${percent}%`
    }

    return (
      <>
        <div className='leftSide'>
          <div>{props.star} Stars</div>
        </div>
        <div className={center}>
          <div className='barContainer'>
            <div className='bar' style={{...style}}></div>
          </div>
        </div>
      </>
    )
  }

  if (meta.ratings !== undefined) {
    for (let i = 1; i <= 5; i++) {
      if (meta.ratings[i] === undefined) {
        ratings[i] = 0;
      } else {
        ratings[i] = meta.ratings[i];
      }
    }
  }

  const ratingsArr = Object.entries(ratings);

  const totalRatings = ratingsArr.reduce((acc, item) => {
    return acc + (parseInt(item[1]));
  }, 0);

  const RatingsList = ratingsArr.map((item) => {
    let starPercentage = (item[1] / totalRatings);
    return <Bar key={item[0][0]} star={item[0][0]} percent={starPercentage} />
  })

  return (
    <>
       <div></div>
       <div className={column}>
         {RatingsList}
       </div>
    </>
  )
}

export default RatingBars;