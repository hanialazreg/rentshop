import axios from "axios";

export default {
  add: category => {
    return axios
      .post("/api/addCategory", {
        name: category.name
      })
      .then(response => response)
      .catch(err => {
        throw err;
      });
  },
  getAllCategories: () => {
    return axios
      .get("/api/categories")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  displayByCategory: category => {
    return axios
      .get("api/getProducts", { params: { category: category } })
      .then(response => response)
      .catch(err => {
        throw err;
      });
  }
};
