import axios from "axios";

const instance = axios.create({
  baseUrl: "https://us-central1-sabkuah-961f5.cloudfunctions.net/api",
  //baseURL: "http://localhost:5001/sabkuah-961f5/us-central1/api", //The API (cloud function) URL
});

export default instance;
