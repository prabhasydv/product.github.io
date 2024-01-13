import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signuppage =() =>{
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const navigate = useNavigate()
    useEffect (()=>{
        const auth = localStorage.getItem("users")
        if(auth){
            navigate("/")

        }
    })
    const handlelogin= async ()=>{
        console.warn("username,password",username,password)
        let result = await fetch('http://localhost:2000/login',{
            method:"POST",
            body:JSON.stringify({username,password}),
            headers: {
                "Content-Type":"application/json"
            }
            
        })
        result = await result.json()
        console.warn(result);
        if(result.username){
            localStorage.setItem("users",JSON.stringify (result.username))
            navigate('/')          
        }else{
            alert("please enter correct details..")
        }
    }
    return(
        <div className="loggin">
        <div className="ring">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="inputBx">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="inputBx">
          {/* The type attribute should be 'submit' for a submit button */}
          <input type="submit" value="Login" onClick={handlelogin} />
        </div>
      </div>
    </div>
    </div>
    )
} 
export default Signuppage