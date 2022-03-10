import axios from "axios";

export const dataLoader = () =>
  axios
    .get("https://leetcodepatternsbackend.herokuapp.com/get")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
