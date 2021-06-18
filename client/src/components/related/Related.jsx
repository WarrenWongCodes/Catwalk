import React, { useContext, useEffect, useState, useCallback } from "react";
import { RelatedContext, ProductContext, StylesContext } from "../../store.jsx";
import CardComponent from "./components/Card.jsx";
import AddOutfitCard from "./components/DefaultAddToOutfit.jsx";
import Styles from "./related.module.css";

export default function Related({ setId }) {
  const related = useContext(RelatedContext);
  const product = useContext(ProductContext);
  const style = useContext(StylesContext);

  // console.log("SEt id in related", setId);

  const [outfits, setOutfits] = useState([]);

  const handleOutfitClick = () => {
    setOutfits(<CardComponent key={product.id} product={product} />);
  };

  return (
    <div className={`container ${Styles.hideOverflow}`}>
      <h2>Related Products</h2>
      <br></br>
      <div className={`${Styles.backgroundOverlay} ${Styles.cardsContainer}`}>
        {related.map((item, i) => {
          return <CardComponent key={i} product={item.data} setId={setId} />;
        })}
      </div>
      <br></br>
      <h2>Outfit</h2>
      <br></br>
      <div
        className={Styles.cardsContainer}
        onClick={() => handleOutfitClick()}
      >
        <AddOutfitCard product={product} style={style} />
        {outfits}
      </div>
    </div>
  );
}
