import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("should load header Cart with 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should load header with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
