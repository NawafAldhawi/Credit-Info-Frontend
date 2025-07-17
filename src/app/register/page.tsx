"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); 

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5241/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (

    
    <div className="min-h-screen flex ">

    <div className="w-[40%] bg-white">

      <div className="flex ml-15 mt-10 space-x-3 mr-10">
    <img src="/logoipsum-377.svg" alt="Logo" className="h-15 w-15" />
    <h1 className="text-4xl font-bold text-black mt-3 ml-2">Credit Info. Website</h1>
    </div>

    <div className="p-20 mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-black">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="text-lg border p-3 w-full text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-lg border p-3 w-full text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="text-lg border p-3 w-full text-gray-800"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option> // i know this makes no sense, but it's just an example
        </select>

        <label className="text-lg flex items-center space-x-3 text-gray-800">
          <input type="checkbox" />
          <span>I agree to the terms and conditions</span>
        </label>

      
        <button type="submit" className="bg-orange-500 text-white p-3 text-lg w-full font-bold">
          Register
        </button>
      </form>
    </div>
    
    </div>
    
    <div className="w-[60%] bg-gray-100 flex"
    style={{
      backgroundImage: "url('/stockbs.jpg')",
      backgroundSize: "cover",}}>
      </div>
        <button className='bg-orange-500 absolute top-175 right-80 w-70 h-20 font-bold text-3xl'>
          About Us
        </button>
  
    </div>

  );
}
