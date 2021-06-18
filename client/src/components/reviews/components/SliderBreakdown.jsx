import React, { useContext, useState } from "react";
import { MetaContext } from "../../../store.jsx";
import { ProductContext, ReviewsContext } from "../../../store.jsx";
import styles from "../styles/slider.module.css";

const { labelChar, slideContainer, slider, labelRow } = styles;

const SliderBreakdown = () => {
  const meta = useContext(MetaContext);
  // console.log("meta: ", meta.characteristics);

  const [value, setvalue] = useState(0);

  const metaVals = meta.characteristics;
  // console.log('meta: ', meta)

  const key = {
    Size: {
      1: "Small",
      2: "",
      3: "Perfect",
      4: "",
      5: "Big",
    },
    Width: {
      1: "Narrow",
      2: "",
      3: "Perfect",
      4: "",
      5: "Wide",
    },
    Comfort: {
      1: "Poor",
      2: "",
      3: "Ok",
      4: "",
      5: "Perfect",
    },
    Quality: {
      1: "Poor",
      2: "",
      3: "Expected",
      4: "",
      5: "Perfect",
    },
    Length: {
      1: "Short",
      2: "",
      3: "Perfect",
      4: "",
      5: "Long",
    },
    Fit: {
      1: "Tight",
      2: "",
      3: "Perfect",
      4: "",
      5: "Long",
    },
  };

  let vals = [];

  if (metaVals !== undefined) {
    vals = Object.entries(metaVals);
    const characteristics = Object.entries(metaVals);
    const key = meta.product_id;
  }
  const slides = vals.map((char, index) => {
    const value = Math.round(char[1].value);
    const minVal = key[char[0]][1];
    const midVal = key[char[0]][3];
    const maxVal = key[char[0]][5];
    return (
      <div key={index}>
        {/* <div className={labelChar}>{char[0]}</div> */}
        <label>{char[0]}</label>
        <div className={slideContainer}>
          <input
            label={char[0]}
            id={char[0]}
            type="range"
            min={1}
            max={5}
            step={1}
            value={value}
            className={slider}
            readOnly={true}
          />
        </div>
        <div className={labelRow}>
          <div>{minVal}</div>
          <div>{midVal}</div>
          <div>{maxVal}</div>
        </div>
      </div>
    );
  });
  return <div>{slides}</div>;
};

export default SliderBreakdown;
