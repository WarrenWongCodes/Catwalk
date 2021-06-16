import React, { useContext, useState } from "react";
import { OverviewContext } from "../../../../overviewContext.jsx";
import styles from "./actions.module.css";
import { IoIosStarOutline as Star } from "react-icons/io";
import { IoIosAdd as Add } from "react-icons/io";
const {
  actionsContainer,
  actionsContainer2,
  sizeContainer,
  quantityContainer,
  size,
  quantity,
  addToBagContainer,
  favoriteContainer,
  bag,
  fav,
  icon,
} = styles;

const Actions = ({ styles }) => {
  const { currentStyle } = useContext(OverviewContext);
  const [selectedSize, setSelectedSize] = useState(undefined);
  // console.log(selectedSize);
  return (
    <div>
      <div className={actionsContainer}>
        <SizeButton
          size={currentStyle.skus}
          sizeState={{ selectedSize, setSelectedSize }}
        />
        <QuantityButton quantity={currentStyle.skus} />
      </div>
      <div className={actionsContainer2}>
        <AddToBag />
        <Favorite />
      </div>
    </div>
  );
};

const onChange = (e) => {
  console.log(e);
};

const SizeButton = ({ size = {}, setSelectedSize }) => {
  return (
    <div className={sizeContainer}>
      <select className={`textButton ${size}`}>
        <option defaultValue>SELECT SIZE</option>
        {Object.entries(size).map(([key, value]) => {
          return <option key={key}>{value.size}</option>;
        })}
      </select>
    </div>
  );
};

const QuantityButton = ({ quantity }) => {
  return (
    <div className={quantityContainer}>
      <select className={`textButton ${quantity}`}>
        <option defaultValue>1</option>
      </select>
    </div>
  );
};

const AddToBag = () => (
  <div className={addToBagContainer}>
    <button className={`textButton ${bag}`}>
      ADD TO BAG
      <Add className={icon} />
    </button>
  </div>
);

const Favorite = () => (
  <div className={favoriteContainer}>
    <button className={fav}>
      <Star className={icon} />
    </button>
  </div>
);

export default Actions;
