import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  Logo
  Nav Items
Body
  Search
  RestaurantContainer
    RestaurantCard
      Img
      Name of Res, Star Rating, cuisine, etc
Footer
  Copyright
  Links
  Address
  Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="data:image/jpeg;base64,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"></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
