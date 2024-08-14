import React from "react";
import { useState } from "react";
import "./Loginup.css";

const account1 = {
  username: "Carlos",
  pin: 1111,
};
const account2 = {
  username: "Steven",
  pin: 2222,
};
const account3 = {
  username: "Jessica",
  pin: 333,
};
const account4 = {
  username: "Davis",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const Loginform = () => {
  const [username, setusername] = useState("");
  const [pin, setpin] = useState("");
  const [error, seterror] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    const matchingaccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    if (matchingaccount) {
      seterror("You are successfully login the page");
    } else {
      seterror("Incorrect username or pin");
    }
  };

  const valuehandler = (event) => {
    // console.log(event);
    setusername(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="sign-in-form" action="">
        <label>
          Username
          <input type="text" value={username} onChange={valuehandler} />
        </label>
        <label>
          Password
          <input
            type="text"
            value={pin}
            onChange={(event) => setpin(event.target.value)}
          />
        </label>
        <br />
        <button className="loginbtn" type="submit">
          Login
        </button>
        <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  );
};

export default Loginform;
