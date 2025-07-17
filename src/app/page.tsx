'use client';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-white">

  
      <div className="relative">
      
        <div className="h-[80px] bg-gray-100 flex items-center px-5 shadow-md z-10 relative">
          <img src="/logoipsum-377.svg" alt="Logo" className="h-15 w-15" />
          <h1 className="text-4xl font-bold text-orange-600 ml-4">Credit Info. Webpage</h1>

          <div className="ml-auto mr-10 hidden md:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              --
            </button>
          </div>
        </div>

     
        <div
          className={`absolute top-full  right-0 transition-all duration-300 overflow-hidden bg-orange-500 z-20 ${
            isOpen ? 'max-h-[200px] pr-20 p-5' : 'max-h-0 p-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white font-semibold">Home</a>
            <a href="/login" className="text-white font-semibold">Login</a>
            <a href="/register" className="text-white font-semibold">Register</a>
          </div>
        </div>
      </div>

     
      <div className="flex-1 bg-white p-6 z-0">
        <main>
          <h2 className="text-2xl font-semibold text-orange-500">Welcome to the Homepage</h2>
          <p className='text-orange-500'>This is my app.</p>
        </main>
      </div>
    </div>
  );
}
