import React, { useContext, useEffect, useState, useCallback } from "react";
import { RelatedContext, ProductContext } from "../../store.jsx";
import CardComponent from "./components/Card.jsx";
import AddOutfitCard from "./components/DefaultAddToOutfit.jsx";
import Styles from "./related.module.css";

export default function Related() {
  const related = useContext(RelatedContext);
  const product = useContext(ProductContext);

  const [outfits, setOutfits] = useState([]);

  const handleOutfitClick = () => {
    console.log(`${product.name} has been added to your outfit`);
    console.log("!@#$");
    setOutfits(<CardComponent key={product.id} product={product} />);
    console.log("Outfits state", outfits);
  };

  return (
    <>
      <div>
        <h4>Related Products</h4>
        <p>Related Product Names:</p>
        <div className={Styles.cardsContainer}>
          {related.map((item, i) => {
            return <CardComponent key={i} product={item.data} />;
          })}
        </div>
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
