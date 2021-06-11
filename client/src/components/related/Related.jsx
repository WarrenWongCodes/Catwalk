import React, { useContext, useEffect } from "react";
import { RelatedContext } from "../../store.jsx";

export default function Related() {
  const related = useContext(RelatedContext);
  // console.log(related[0]);

  useEffect(() => {});

  return (
    <>
      <h4>Related Products</h4>
      <p>Related Product Names:</p>
      <div>
        {related.map((item) => {
          return <p>{item.data.name}</p>;
        })}
      </div>
    </>
  );
}
