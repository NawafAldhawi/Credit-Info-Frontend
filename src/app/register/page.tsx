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
    <div className="min-h-screen bg-white flex flex-col ">

    <div className="flex items-center justify-center mt-10 space-x-3 mr-10">
    <img src="/logoipsum-377.svg" alt="Logo" className="h-10 w-10" />
    <h1 className="text-3xl font-bold text-black">Credit Info. Website</h1>
    </div>

    <div className="max-w-md mx-auto mt-50 justify-center">
      <h2 className="text-2xl font-bold mb-4 ml-40 text-black">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full text-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full text-gray-800"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option> // i know this makes no sense, but it's just an example
        </select>
        <button type="submit" className="bg-orange-600 text-white p-2 w-full font-bold">
          Register
        </button>
      </form>
    </div>
    </div>

  );
}
