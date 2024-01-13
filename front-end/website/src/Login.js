import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Use lowercase 'email'
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  useEffect(()=>{
    const auth = localStorage.getItem("users")
    if(auth){
        navigate("/")
    }
})

  const collectdata = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the fields is empty
    if (!username || !email || !password) {
      alert("All fields must be filled");
      return;
    }

    console.warn(username, email, password);

    try {
      let result = await fetch('http://localhost:2000/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      result = await result.json();
      console.warn(result);
      localStorage.setItem("users",JSON.stringify(result))
      if(result)
      {
        navigate('/')
      }
      
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="loggin">
    <div className="ring">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login">
        <h2>Signup</h2>
        <div className="inputBx">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputBx">
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputBx">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputBx">
          {/* The type attribute should be 'submit' for a submit button */}
          <input type="submit" value="Sign in" onClick={collectdata} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;

