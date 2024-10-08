import { useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Formulario Simple</h1>

      <hr />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {username === "majo" && <Message />}
    </div>
  );
};

export default SimpleForm;

/*

*************Distintos useEffect usados para efectos secundarios de la aplicacion 

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  useEffect(() => {
    console.log("form changed");
  }, [formState]);
  useEffect(() => {
    console.log("email change");
  }, [email]);

*/
