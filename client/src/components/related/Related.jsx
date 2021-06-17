import React, { useContext, useEffect, useState, useCallback } from "react";
import { RelatedContext, ProductContext, StylesContext } from "../../store.jsx";
import CardComponent from "./components/Card.jsx";
import AddOutfitCard from "./components/DefaultAddToOutfit.jsx";
import Styles from "./related.module.css";

export default function Related() {
  const related = useContext(RelatedContext);
  const product = useContext(ProductContext);
  const style = useContext(StylesContext);

  const [outfits, setOutfits] = useState([]);

  const handleOutfitClick = () => {
    setOutfits(<CardComponent key={product.id} product={product} />);
  };

  return (
    <>
      <div className={`container ${Styles.hideOverflow}`}>
        <h2>Related Products</h2>
        <br></br>
        <div className={`${Styles.backgroundOverlay} ${Styles.cardsContainer}`}>
          {related.map((item, i) => {
            return <CardComponent key={i} product={item.data} />;
          })}
        </div>
        <br></br>
        <h2>Outfit</h2>
        <br></br>
        <div
          className={Styles.cardsContainer}
          onClick={() => handleOutfitClick()}
        >
          <AddOutfitCard product={product} />
          {outfits}
        </div>
      </div>
    </>
  );
}
