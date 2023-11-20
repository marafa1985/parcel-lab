import { ResponseError } from "../types/error";
import { Order } from "../types/types";
import clientAPI from "./client";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API ?? "https://api.prcl.dev";

export const getOrderDetails = async (
  orderNumber: string,
  zipCode: string
): Promise<Order | ResponseError> => {
  try {
    const { data } = await clientAPI(BASE_URL).get(
      `${BASE_URL}/orders/${orderNumber}?zip=${zipCode}`
    );
    return data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const error = err.response?.data;
      return error;
    }

    throw err;
  }
};
