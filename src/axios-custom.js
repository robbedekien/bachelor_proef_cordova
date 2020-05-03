import axios from "axios";

const instance = axios.create({
  baseURL: "https://dry-temple-37388.herokuapp.com/api/v1",
});

export default instance;
