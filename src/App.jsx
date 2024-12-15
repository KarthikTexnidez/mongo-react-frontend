import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sentData = (e) => {
    e.preventDefault();
    axios
      .post("https://mongo-react-backend.onrender.com/entry", { name, email, password })
      .then((result) => console.log(result), alert("Data Send"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="">
        <label htmlFor="name">Full Name</label> <br />
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <button onClick={sentData}>Send Data</button>
      </form>
    </>
  );
};

export default App;
