import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.100.51:3333"
});

export default client;
