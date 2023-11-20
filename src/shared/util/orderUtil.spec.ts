import { Order } from "shared/types/types";
import { orderUtil } from "./orderUtil";

describe("orderUtil", () => {
  const order = {
    checkpoints: [
      {
        event_timestamp: "2021-01-01T10:00:00Z",
        description: "Checkpoint 1",
      },
      {
        event_timestamp: "2021-01-02T12:00:00Z",
        description: "Checkpoint 2",
      },
      {
        event_timestamp: "2021-01-03T14:00:00Z",
        description: "Checkpoint 3",
      },
    ],
    delivery_info: {
      articles: ["Article 1", "Article 2", "Article 3"],
    },
  } as unknown as Order;
  it("should return the last checkpoint, checkpoints array, and articles from the order", () => {
    const result = orderUtil(order);

    expect(result.lastCheckpoint).toEqual({
      event_timestamp: "2021-01-03T14:00:00Z",
      description: "Checkpoint 3",
    });
  });

  it("should return sorted checkpoints array", () => {
    const result = orderUtil(order);

    expect(result.checkpoints).toEqual([
      { event_timestamp: "2021-01-03T14:00:00Z", description: "Checkpoint 3" },
      { event_timestamp: "2021-01-02T12:00:00Z", description: "Checkpoint 2" },
      { event_timestamp: "2021-01-01T10:00:00Z", description: "Checkpoint 1" },
    ]);
    expect(result.articles).toEqual(["Article 1", "Article 2", "Article 3"]);
  });

  it("should return articles from the order", () => {
    const result = orderUtil(order);

    expect(result.articles).toEqual(["Article 1", "Article 2", "Article 3"]);
  });
});
