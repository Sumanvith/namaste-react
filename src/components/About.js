import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    //console.log("Parent Constructor");
  }
  componentDidMount() {
    //console.log("Parent Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React</h2>
        <UserClass
          name={"Sumanvith (class)"}
          location={"Hyderabad (class)"}></UserClass>
      </div>
    );
  }
}

export default About;
