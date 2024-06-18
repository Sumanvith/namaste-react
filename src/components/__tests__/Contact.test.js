import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page", () => {
  test("should load contact", () => {
    render(<Contact></Contact>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should load contact", () => {
    render(<Contact></Contact>);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  it("should load contact", () => {
    render(<Contact></Contact>);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  it("should load contact", () => {
    render(<Contact></Contact>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
  });
});
