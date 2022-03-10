import axios from "axios";

export const dataLoader = () =>
  axios
    .get("https://leetcodepatterns.herokuapp.com/get")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
