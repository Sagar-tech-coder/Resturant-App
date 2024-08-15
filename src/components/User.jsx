import { useEffect, useState } from "react";
import "./User.css";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(1);

  useEffect(() => {
    // Here we can make API Call
  }, []);

  return (
    <>
      <div className="user-card">
        <h1>{"count " + count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setUser(user + 1);
          }}
        >
          Click here
        </button>
        <h1>{"user " + user}</h1>
        <h2 className="h2">Name: {name}</h2>
        <h3>Location: Kolkata</h3>
        <h4>Contact: @sagarmarch7</h4>
      </div>
    </>
  );
};

export default User;
