import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import usericon from "./usericon.jpg";


const HeadingCompenent = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading1"),
  React.createElement("h2", {}, "Heading2"),
  React.createElement("h3", {}, "Heading3"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));



const heading1 = <h1>heading1</h1>;
const heading2 = <h2>heading2</h2>;
const heading3 = <h3>heading3</h3>;

const Element = (
  <div className="title">
    {heading1}
    {heading2}
    {heading3}
  </div>
);

const ContainerJSX = () => (
      <div className="title">
        {heading1}
        {heading2}
        {heading3}
      </div>
  );

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <input type="text" placeholder="Search" className="search-bar" />
      <img src={usericon} alt="User Icon" className="user-icon" />
    </header>
  );
};
root.render(<Header/>);