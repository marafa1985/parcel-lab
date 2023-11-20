import axios from "axios";

export const clientAPI = (baseURL?: string) => {
  axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Accept: "application/json",
    },
  });

  return axios;
};
export default clientAPI;
