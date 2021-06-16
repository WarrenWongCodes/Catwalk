import React, { useContext } from "react";
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
  return (
    <div>
      <div className={actionsContainer}>
        <SizeButton />
        <QuantityButton />
      </div>
      <div className={actionsContainer2}>
        <AddToBag />
        <Favorite />
      </div>
    </div>
  );
};

const SizeButton = () => (
  <div className={sizeContainer}>
    <select className={`textButton ${size}`}>
      <option defaultValue>SELECT SIZE</option>
    </select>
  </div>
);

const QuantityButton = () => (
  <div className={quantityContainer}>
    <select className={`textButton ${quantity}`}>
      <option defaultValue>1</option>
    </select>
  </div>
);

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
