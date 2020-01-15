import axios from "axios";

export default {
  getProducts: () => {
    return axios
      .get("/api/products")
      .then(resp => resp)
      .catch(err => {
        throw err;
      });
  }
};
