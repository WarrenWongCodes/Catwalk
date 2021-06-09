import { createContext, useState } from "react";

const [id, setId] = useState(11002);

Store = createContext({ id, setID });

const StoreProvider = ({ children }) => {
  return (
    <Store.Provider value={{ id, setId }}>
      {...children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };













const [id, setId] = useState(11002);
// Product
const [product, setProduct] = useState({});
const [styles, setStyles] = useState([]);
// Reviews
const [reviews, setReviews] = useState([]);
const [meta, setMeta] = useState({});
// Questions
const [qa, setQa] = useState([]);
// Answers
const [answers, setAnswers] = useState([]);
// Cart
const [cart, setCart] = useState([]);
//Interaction
const [interactions, setInteractions] = useState({
  element: "",
  widget: "",
  time: new Date().toLocaleString(),
});