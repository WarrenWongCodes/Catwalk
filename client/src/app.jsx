import React, { useState, useEffect } from "react";
import KEYS from "/.env.js";
import axios from "axios";

console.log("API KEY", KEYS.API_KEY);
console.log("Endpoint", KEYS.ENDPOINT);

export default function App(props) {
  const [id, setId] = useState(11003);
  const [product, setProduct] = useState();
  const [styles, setStyles] = useState();

  const options = {
    baseURL: `${KEYS.ENDPOINT}`,
    headers: {
      Authorization: `${KEYS.API_KEY}`,
    },
  };

  // console.log("calling setId", id);

  // Axios to get product infoprmation
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(`/products/${id}`, options)
      .then((res) => {
        // console.log("calling setId", id);
        setProduct(res.data);
        // console.log("Product after state", product);
        // return res.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .then((res) => {
        axios
          .get(`/products/${id}/styles`, options)
          .then((res) => {
            console.log("Styles Data", res);
            setStyles(res.data.results);
          })
          .catch((error) => {
            console.error(error);
          });
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  // axios(options)
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log("There was an error");
  //   });
  // console.log("Product Name", product.name);
  return (
    <main>
      <header>
        <h1>Hello</h1>
      </header>
    </main>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { products: [] };
//   }

//   // Axios to get product infoprmation
//   getProduct() {
//     axios
//       .get(`${KEYS.ENDPOINT}/products`, {
//         headers: {
//           Authorization: `Basic ${KEYS.API_KEY}`,
//           count: "all",
//         },
//       })
//       .then((data, err) => {
//         console.log(data);
//       });
//   }

//   // Axios to get Reviews

//   // Axios to get Questions and Answers

//   // Axios to get cart

//   render() {
//     return (
//       <main>
//         <header>
//           <h1>Hello World</h1>
//         </header>
//       </main>
//     );
//   }
// }
