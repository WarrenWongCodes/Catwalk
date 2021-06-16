import React, { useContext, useEffect, useState, useCallback } from "react";
import { RelatedContext, ProductContext, IdContext } from "../../store.jsx";
import CardComponent from "./components/Card.jsx";
import AddOutfitCard from "./components/DefaultAddToOutfit.jsx";
import Styles from "./related.module.css";

export default function Related() {
  const related = useContext(RelatedContext);
  const product = useContext(ProductContext);
  const id = useContext(IdContext);

  const [outfits, setOutfits] = useState([]);

  const handleOutfitClick = () => {
    setOutfits(<CardComponent key={product.id} product={product} />);
  };

  return (
    <>
      <div>
        <h2>Related Products</h2>
        <div className={Styles.cardsContainer}>
          {related.map((item, i) => {
            return <CardComponent key={i} product={item.data} />;
          })}
        </div>
        <h2>Outfit</h2>
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
