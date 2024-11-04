import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
    localStorage.setItem('user', JSON.stringify(user))
    
  }

  return (
    <div className="w-[50%] mx-auto flex flex-col justify-center items-center border-[3px] border-black p-4 rounded-lg shadow-md bg-[url('https://picsum.photos/1600/900')]">
      <h1 className="text-4xl text-white">Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <input type="text" name="" id="" className="w-full px-4 py-2 rounded-lg border border-slate-500" placeholder="Enter your Name" value={user} onChange={(e)=>setUser(e.target.value)}/>
          </div>
          <div className="mt-3">
            <input type="text" name="" id="" className="w-full px-4 py-2 rounded-lg border border-slate-500" placeholder="Enter your Email ID" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mt-3">
            <button className="px-4 py-2 border border-blue-950 rounded-xl bg-green-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
