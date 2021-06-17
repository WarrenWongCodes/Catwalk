import React from "react";
import Styles from "../related.module.css";

// console.log(star);

export default function AddOutfitCard({ product }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img
          src="https://lh3.googleusercontent.com/proxy/ElHbl9HhIOOAyo4xnbxqfKdLyv7ec213pjqUsv5fsg5RAUPjzRUVRNlkwTAPGYCXAJ4usGqU3mes-WmuDzC-4DSaf1_aBduWHH5vZ9v_bi9t"
          alt="addOutfit"
        />
      </div>
      <div className={Styles.cardBody}>
        <br></br>
        <br></br>
        <br></br>
        <h2
          style={{ textAlignVertical: "center", textAlign: "center" }}
          className={Styles.title}
        >
          Add {product.name} to your outfit
        </h2>
        <div className={Styles.user}></div>
      </div>
    </div>
  );
}
