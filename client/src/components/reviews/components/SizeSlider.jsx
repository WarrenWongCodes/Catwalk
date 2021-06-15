import React, { useContext } from 'react';
import { MetaContext } from '../../../store.jsx';
import '../styles/reviews.css';


const SizeSlider = () => {

  const meta = useContext(MetaContext);
  if (meta.characteristics !== undefined) {
  }

  return (
    <>
      <div className="spacer">
        <div>size slider</div>
        <div className="spacer"></div>
      </div>
      <div className='sliderContainer'>
        <div className='small slideBackground'>small</div>
        <div className='perfect slideBackground'>perfect</div>
        <div className='large slideBackground'>large</div>
        <div className='slideBackground'></div>
      </div>
    </>
  )
}

export default SizeSlider;