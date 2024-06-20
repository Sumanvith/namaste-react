import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

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
