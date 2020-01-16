import axios from "axios";

export default {
  add: type => {
    return axios
      .post("/api/addType", {
        type_name: type.type_name
      })

      .then(response => response)
      .catch(err => {
        throw err;
      });
  },
  getTypes: () => {
    return axios
      .get("/api/types")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};
