import axios from "axios";

export default {
  register: user => {
    return axios
      .post("/api/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
        phone_number: user.phone_number
      }
      )
      .then(response => response)
      .catch(error => error.response);
    
  }
};
