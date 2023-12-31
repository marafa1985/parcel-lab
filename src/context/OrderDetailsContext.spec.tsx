import {
  OrderDetailsContextProvider,
  OrderDetailsContext,
} from "./OrderDetailsContext";
import { useContext } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const errorDataMock = {
  data: {
    error: {
      error: {
        message: "Order not found",
      },
    },
  },
};

const orderDataMock = {
  data: {
    _id: "12345",
  },
};

const MyComponent = () => {
  const { error, order, signIn } = useContext(OrderDetailsContext);
  const handleClick = async () => {
    await signIn({
      orderNumber: "12345",
      zipCode: "12345",
    });
  };
  return (
    <>
      {error && <p data-testid="error">{error.error.message}</p>}
      {order && <p data-testid="success">{order._id}</p>}
      <button data-testid="trackBtn" onClick={handleClick}>
        Track
      </button>
    </>
  );
};

describe("OrderDetailsContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it("should return error in case of no orders", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(errorDataMock)
    );

    render(
      <BrowserRouter>
        <OrderDetailsContextProvider>
          <MyComponent />
        </OrderDetailsContextProvider>
      </BrowserRouter>
    );
    const trackButton = screen.getByTestId("trackBtn");

    if (trackButton) {
      fireEvent.click(trackButton);
    }
    await waitFor(() => {
      expect(screen.getByTestId("error")).toBeDefined();
    });
  });

  it("should return order in case of order found", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(orderDataMock)
    );

    render(
      <BrowserRouter>
        <OrderDetailsContextProvider>
          <MyComponent />
        </OrderDetailsContextProvider>
      </BrowserRouter>
    );
    const trackButton = screen.getByTestId("trackBtn");

    if (trackButton) {
      fireEvent.click(trackButton);
    }
    await waitFor(() => {
      expect(screen.getByTestId("success")).toBeDefined();
    });
  });
});
