import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });
  //const { username, email, password } = formState;
  return (
    <div>
      <h1>Formulario con Custom hook</h1>

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
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {username === "majo" && <Message />}
    </div>
  );
};

export default FormWithCustomHook;

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
