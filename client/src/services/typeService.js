import axios from "axios";

export default {
  add: type => {
    return axios
      .post("/api/addType", {
        name: type.name
      })
      .then(response => response)
      .catch(err => {
        throw err;
      });
  },
  getTypes: () => {
    return axios
      .get("/api/Types")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};
