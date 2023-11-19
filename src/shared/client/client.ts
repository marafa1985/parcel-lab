import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API ?? "https://api.prcl.dev",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Accept: "application/json",
  },
});
