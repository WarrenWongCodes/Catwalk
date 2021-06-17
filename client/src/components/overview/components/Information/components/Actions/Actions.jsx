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
  sizeStyle,
  quantityStyle,
  addToBagContainer,
  favoriteContainer,
  bag,
  fav,
  icon,
  spaceContainer,
} = styles;

const Actions = ({ styles }) => {
  const { currentStyle } = useContext(OverviewContext);
  const [selectedSize, setSelectedSize] = useState(undefined);
  return (
    <div className={spaceContainer}>
      <div className={actionsContainer}>
        <SizeButton
          size={currentStyle.skus}
          setSelectedSize={setSelectedSize}
        />
        <QuantityButton
          quantity={currentStyle.skus}
          selectedSize={selectedSize}
        />
      </div>
      <div className={actionsContainer2}>
        <AddToBag />
        <Favorite />
      </div>
    </div>
  );
};

const SizeButton = ({ size = {}, setSelectedSize }) => {
  const onChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className={sizeContainer}>
      <select className={`textButton ${sizeStyle}`} onChange={onChange}>
        <option value={true}>SELECT SIZE</option>
        {Object.entries(size).map(([key, value]) => {
          return (
            <option key={key} value={value.quantity}>
              {value.size}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const createArray = (num) => {
  var result = [];
  for (var i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
};

const QuantityButton = ({ quantity = {}, selectedSize }) => {
  if (selectedSize) {
    var quantities = createArray(selectedSize);
    return (
      <div className={quantityContainer}>
        <select className={`textButton ${quantityStyle}`}>
          {quantities.map((value, i) => {
            if (value <= 15) {
              return <option key={i}>{value}</option>;
            }
          })}
        </select>
      </div>
    );
  } else if (selectedSize === 0) {
    return (
      <div className={quantityContainer}>
        <select className={`textButton ${quantityStyle}`}>
          <option disabled defaultValue>
            Out of Stock
          </option>
        </select>
      </div>
    );
  } else {
    return (
      <div className={quantityContainer}>
        <select className={`textButton ${quantityStyle}`}>
          <option disabled defaultValue>
            -
          </option>
        </select>
      </div>
    );
  }
};

const onAdd = () => {
  window.alert("Added To Bag");
};

const AddToBag = () => (
  <div className={addToBagContainer}>
    <button className={`textButton ${bag}`} onClick={() => onAdd()}>
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
