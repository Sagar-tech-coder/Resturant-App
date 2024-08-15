import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      user: 1,
    };

    // console.log(props);
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child constructorDidMount");

    // API Call
    const data = await fetch("https://api.github.com/users/USERNAME");
    const json = await data.json();

    console.log(json);
  }

  render() {
    const { name } = this.props;
    const { count, user } = this.state;

    // console.log("Child Render");

    return (
      <>
        <div className="user-card">
          <h1>{"Count " + count}</h1>
          <button
            onClick={() => {
              // Never update the state variable directly
              this.setState({
                count: this.state.count + 1,
                user: this.state.user + 1,
              });
            }}
          >
            Click +{" "}
          </button>
          <h1>{"User " + user}</h1>
          <h2 className="h2">Name: {name}</h2>
          <h3>Location: Kolkata</h3>
          <h4>Contact: @sagarmarch7</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
