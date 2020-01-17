import axios from "axios";
export default {
  rent: () => {
    return axios
      .post("/api/rent", {
        //   try to verify things sended
        date: new Date(),
        productId: productId,
        quantity: quantity,
        duration: duration,
        UserId: UserId,
        cost: cost
      })
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};
