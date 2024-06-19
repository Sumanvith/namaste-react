import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA}></RestaurantCard>);
  const card_name = screen.getByText("Pizza Hut");
  expect(card_name).toBeInTheDocument();
});
