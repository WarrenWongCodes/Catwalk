this.state = {
  id: "either be default or route",
  Products: {
    styles: [],
    // styles.results.length = amount of styles for that product
  },

  Reviews: {
    results: [],
    meta: {},
  },
  QA: {
    results: [],
    // Grab all Questions but only display 2
  },
  Cart: {},
  Interactions: {
    element: "",
    widget: "",
    time: new Date().toLocaleString(),
  },
};
