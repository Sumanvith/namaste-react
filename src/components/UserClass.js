import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        location: "default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child Mount");
    const data = await fetch("https://api.github.com/users/Sumanvith");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("componentDidMount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    //console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sumanvith16</h4>
      </div>
    );
  }
}
export default UserClass;
