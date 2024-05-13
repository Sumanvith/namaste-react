import React from "react";
import ReactDOM from "react-dom/client";


const Title =()=> (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

const HeadingCompenent = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">Namaste React Functional Compenent</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompenent/>);
