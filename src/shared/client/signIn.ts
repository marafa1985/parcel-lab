import { Order } from "shared/types/types";
import api from "./client";
import axios from "axios";
import { ResponseError } from "shared/types/error";

export const getOrderDetails = async (
  orderNumber: string,
  zipCode: string
): Promise<Order | ResponseError> => {
  try {
    const { data } = await api.get(`/orders/${orderNumber}?zip=${zipCode}`);
    return data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const error = err.response?.data;
      return error;
    }

    throw err;
  }
};
