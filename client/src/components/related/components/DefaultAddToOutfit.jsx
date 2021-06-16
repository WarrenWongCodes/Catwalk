import React from "react";
import Styles from "../related.module.css";

// console.log(star);

export default function AddOutfitCard({ product }) {
  // const [outfits, setOutfits] = useState([]);

  // const handleOutfitClick = () => {
  //   console.log(`${product.name} has been added to your outfit`);
  //   console.log("!@#$");
  //   outfits.concat(<CardComponent key={product.id} product={product} />);
  // };

  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/shopping-268/70/hanger__wardrobe__rack__shopping__cloth-512.png"
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
