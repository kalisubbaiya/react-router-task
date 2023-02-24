import React, {useState} from 'react';
// import Header from '../Header/Header';
import "./Login.css";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const obj = {
      user: "kaliraj",
      password: "kalirajfed04"
    }

  const [userName,setUserName]=useState("");  
  const [password,setPassword]=useState("");
  const [flag,setFlag]= useState(false);


  const handleInputChange = (ev)=>{
    setFlag(false)

    if (ev.target.name === 'userName'){
      setUserName(ev.target.value);
    } else{
      setPassword(ev.target.value);
    }
  }
  
  const navigate = useNavigate();
  const handleSubmit = (ev)=> {
    ev.preventDefault();
    setFlag(true)
    // if (userName === "" || password === "" || obj.user !== userName || obj.password !== password) return;
    if (userName !== "" && obj.user === userName && password !=="" && obj.password === password){
      navigate("/task");
    }
  }


  return (
    <div className='login'>
        {/* <Header /> */}
      <form>
        <input
          type="text"
          name="userName"
          placeholder="Enter User Name"
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        {userName === "" && flag && (
          <p style={{ color: "red" }}>User Name is required</p>
        )}
        {obj.user !== userName && userName!==""&& flag&&( <p style={{ color: "red" }}>User name didn't match</p>)}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        {password === "" && flag && (
          <p style={{ color: "red" }}>Password is required</p>
        )}
        {obj.password !== password && password!==""&&flag&&( <p style={{ color: "red" }}>Password didn't match</p>)}
        <div className='btn'>
            <button type="submit" onClick={handleSubmit}>
            Login
            </button>
        </div>
      </form>
    </div>
  );
}

export default Login