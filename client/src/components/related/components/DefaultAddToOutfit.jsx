import React from "react";
import Styles from "../related.module.css";

// console.log(star);

export default function AddOutfitCard({ product }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"
          alt="addOutfit"
        />
      </div>
      <div className={Styles.cardBody}>
        <h2 className={Styles.title}>Add {product.name} to your outfit</h2>
        <div className={Styles.user}></div>
      </div>
    </div>
  );
}
