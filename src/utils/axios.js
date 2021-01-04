import axios from "axios";

const instance = axios.create({
  baserURL: "...", //The API (cloud function) URL
});

export default instance;
