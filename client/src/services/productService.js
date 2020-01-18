import axios from "axios";

export default {
  add: product => {
    return axios
      .post("/api/addproduct", {
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        price_rent: product.price_rent,
        type_rent: product.type_rent,
        store: product.store
      })
      .then(response => response)
      .catch(error => error);
  },

  getProducts: () => {
    return axios
      .get("/api/products")
      .then(resp => resp)
      .catch(err => {
        throw err;
      });
  },
  getOneProduct: id => {
    return axios
      .get("api/one", { params: { id: id } })
      .then(resonse => resonse)
      .catch(err => {
        throw err;
      });
  }
};
