import axios from "axios";

const store = {
  state: {
    products: []
  },
  fetchProducts() {
    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then(res => res.data)
      .then(res => {
        this.state.products = res;
      });
  },
  addProduct(product) {
    this.state.products.push(product);
  }
};

export default store;
