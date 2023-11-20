import { OrderDetailsContextProvider } from "context/OrderDetailsContext";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { SignInForm } from "./SignInForm";

jest.mock("axios");
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

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

describe("OrderDetailsContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it("should return show error message in case of no orders", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(errorDataMock)
    );

    render(
      <BrowserRouter>
        <OrderDetailsContextProvider>
          <SignInForm />
        </OrderDetailsContextProvider>
      </BrowserRouter>
    );

    const orderNumber = screen.getByTestId("orderNumber");
    const zipCode = screen.getByTestId("zipCode");

    fireEvent.change(orderNumber, { target: { value: "12345" } });
    fireEvent.change(zipCode, { target: { value: "12345" } });

    const trackButton = screen.getByRole("track");

    if (trackButton) {
      fireEvent.click(trackButton);
    }
    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeDefined();
    });
  });

  it("should return order in case of order found", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(orderDataMock)
    );

    render(
      <BrowserRouter>
        <OrderDetailsContextProvider>
          <SignInForm />
        </OrderDetailsContextProvider>
      </BrowserRouter>
    );

    const orderNumber = screen.getByTestId("orderNumber");
    const zipCode = screen.getByTestId("zipCode");

    fireEvent.change(orderNumber, { target: { value: "12345" } });
    fireEvent.change(zipCode, { target: { value: "12345" } });

    const trackButton = screen.getByRole("track");

    if (trackButton) {
      fireEvent.click(trackButton);
    }
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });
});
