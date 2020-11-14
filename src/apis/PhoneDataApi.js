import axios from "axios";

export const phoneDataApi = axios.create({
  baseURL: "https://immense-retreat-53510.herokuapp.com",
});
