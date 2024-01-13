import React from "react"
import {Link, useNavigate} from "react-router-dom"

const Addproduct = ()=>{
    const auth= localStorage.getItem("users")
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.clear()
        navigate("/login")
        
    }
    return(
        <div className="home-page"> 
        <header>
        <nav>

        <div class="logo">
             Portfolio.
        </div>
        <div className="button">



        {
  auth ? (
    <>
      <button>
        <Link className="loginone" to="/">Product</Link>
      </button>
      <button>
        <Link className="loginone" to="/contact">Contact</Link>
      </button>
      <button onClick={logout}>
        <Link className="loginone" to="/logout">Logout</Link>
      </button>
    </>
  ) : (
    <>
      <Link className="loginone" to="/login"><button className="loginone">
        Signup
      </button></Link>
      <Link className="loginone" to="/signup" > <button >
        Log In
      </button></Link>
    </>
  )
}

        </div>
    </nav>
    </header>  
    </div> 
    )
}
export default Addproduct