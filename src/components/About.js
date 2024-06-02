import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React</h2>
      <UserClass
        name={"Sumanvith (class)"}
        location={"Hyderabad (class)"}></UserClass>
    </div>
  );
};

export default About;
