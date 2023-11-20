import { Checkpoint, Article, Order } from "../shared/types/types";

export type OrderStatus = {
  lastCheckpoint?: Checkpoint;
  checkpoints?: Checkpoint[];
  articles?: Article[];
};

export const useOrderStatus = (order: Order): OrderStatus => {
  const checkpoints = order.checkpoints.sort(
    (a, b) =>
      new Date(b.event_timestamp).getTime() -
      new Date(a.event_timestamp).getTime()
  );

  const lastCheckpoint = checkpoints[0];
  const articles = order.delivery_info.articles;

  return {
    lastCheckpoint,
    checkpoints,
    articles,
  };
};
