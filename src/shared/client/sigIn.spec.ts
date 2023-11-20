import axios from "axios";
import { getOrderDetails } from "./signIn";

jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        _id: "12345",
      },
    };

    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(data)
    );
    const result = await getOrderDetails("123", "12345");

    expect(JSON.stringify(result)).toEqual(JSON.stringify(data.data));
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getOrderDetails("123", "12345")).rejects.toThrow(errorMessage);
  });
});
