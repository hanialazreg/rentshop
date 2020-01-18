import axios from "axios";
export default {
  rent: () => {
    return axios
      .post("/api/rent", {
        //   try to verify things sended
        // date: new Date(),
        // _id: product._id,
        // quantity: quantity,
        // duration: duration,
        // UserId: UserId,
      })
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};
