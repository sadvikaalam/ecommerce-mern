import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const  [username, SetUsername] = useState("");
  const  [password, SetPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }); 
  };
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",


    }}>
      <input 
        type="text" 
        placeholder="username" 
        onChange={e => SetUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password" 
        onChange={e => SetPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;
