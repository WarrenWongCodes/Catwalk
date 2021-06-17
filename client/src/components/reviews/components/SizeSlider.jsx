import React, { useContext, useState } from "react";
import { MetaContext } from "../../../store.jsx";
import styles from "../styles/slider.module.css";

const { spacer, slideContainer, slider, labelRow } = styles;

const SizeSlider = () => {
  const [size, setSize] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  return (
    <div>
      <div className={spacer}>
        <div className={slideContainer}>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            default={3}
            className={slider}
            onChange={(e) => console.log(handleChange)}
            onMouseUp={handleChange}
          />
        </div>
        <div className={labelRow}>
          <div>small</div>
          <div>perfect</div>
          <div>large</div>
        </div>
        <div className={spacer}></div>
      </div>
    </div>
  );
};

export default SizeSlider;
