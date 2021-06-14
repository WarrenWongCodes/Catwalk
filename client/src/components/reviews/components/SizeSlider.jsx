import React, { useContext } from 'react';
import { MetaContext } from '../../../store.jsx';

const SizeSlider = () => {

  const meta = useContext(MetaContext);
  console.log('meta: ', meta);
  if (meta.characteristics !== undefined) {
    console.log('metaChar', meta.characteristics);
  }

  return (
    <>
      <div>size slider</div>
      <div className='sliderContainer'>
        <div className='small slideBackground'></div>
        <div className='perfect slideBackground'></div>
        <div className='large slideBackground'></div>
        <div className='slideBackground'></div>
      </div>

    </>
  )
}

export default SizeSlider;