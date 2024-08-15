import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent constructorDidMount");
  }
  render() {
    // console.log("Parent Render");

    return (
      <>
        <h1>About</h1>
        <h2>This is Namaste Web Series</h2>
        {/* <User name={"Sagar function"} /> */}
        <UserClass name={"Sagar Class"} />
      </>
    );
  }
}

// Order of Constructor, constructorDidMount and Render (Parent and child)
// Parent Constructor > Parent Render > Child Constructor > Child Render > Child constructorDidMount > Parent constructorDidMount

// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <h2>This is Namaste Web Series</h2>
//       <User name={"Sagar function"} />
//       <UserClass name={"Sagar Class"} />
//     </>
//   );
// };

export default About;
