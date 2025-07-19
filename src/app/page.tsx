'use client';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [Goal1, setGoal1] = useState(false);
  const [Goal2, setGoal2] = useState(false);
  const [Goal3, setGoal3] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <div  className="sticky top-0 z-30 bg-gray-100 shadow-md">
        <div className="h-[80px] bg-gray-100 flex items-center px-5 shadow-md z-10 sticky top-0">
          <img src="/logoipsum-377.svg" alt="Logo" className="h-15 w-15" />
          <h1 className="sticky top-0 text-4xl font-bold text-orange-500 ml-4">Credit Info. Webpage</h1>

          <div className="ml-auto mr-10 hidden md:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-[80px] right-0 transition-all duration-300 overflow-hidden bg-orange-500 z-20 ${
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

      {/* Main Scrollable Content */}
      <main className="flex-1 bg-white overflow-y-scroll ">
        <div className="flex min-h-screen">
          {/* LEFT: Image Section */}
          <div className="flex-[3] h-screen">
            <section className="h-screen w-full">
              <img src="/stockbs.jpg" alt="Image 1" className="object-cover w-full h-[120%]" />
            </section>
          </div>

          {/* RIGHT: ABOUT US Section */}
          <div className="flex-[1] min-h-screen flex flex-col items-center relative overflow-visible">
            {/* Title */}
            <div className='flex items-center w-full mt-10 px-30 gap-4 my-1'>
              <div className="flex-grow h-[3px] bg-orange-500" />
              <div className="flex-grow h-[60px] rounded-lg bg-orange-500 flex items-center justify-center shadow-md">
                <h1 className="text-4xl font-bold text-white font-serif whitespace-nowrap">ABOUT US</h1>
              </div>
              <div className="flex-grow h-[3px] bg-orange-500" />
            </div>

            {/* Paragraph */}
            <div className="mt-1 px-8 py-6 max-w-[90%] rounded-lg text-orange-500 leading-relaxed">
              <p className="text-3xl text-center font-serif">
                Credit Info is dedicated to empowering individuals and businesses with accurate,
                transparent, and secure credit insights. We simplify complex financial data into
                clear reports that support smarter decisions. Our mission is to promote financial
                literacy and responsibility by providing easy access to vital credit information.
              </p>
            </div>

            <div className="flex w-full items-center mt-10 px-30 gap-4 my-1">
              <div className="flex-grow h-[3px] bg-orange-500" />
              <div className="flex-grow py-3 rounded-lg bg-orange-500 flex items-center justify-center shadow-md">
                <h1 className="text-4xl font-bold font-serif text-white whitespace-nowrap">GOALS</h1>
              </div>
              <div className="flex-grow h-[3px] bg-orange-500" />
            </div>

            <div className="mt-3 px-8 py-6 max-w-[90%] flex justify-center rounded-lg gap-6 text-orange-500 relative leading-relaxed ">
              {/* Normal button {Innovation} */}
              <button
                onMouseEnter={() => setGoal1(true)} onMouseLeave={() => setGoal1(false)}
                className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl relative z-10 
                ${!Goal1 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'} `}
              >
                Innovation
              </button>

              {/* Hover animation button {Innovation} */}
              <button
                className={`absolute left-0 bg-orange-500 text-white px-10 py-40 overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
                ${Goal1 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                Innovation
              </button>

              {/* Normal button {Growth} */}
              <button
                onMouseEnter={() => setGoal2(true)} onMouseLeave={() => setGoal2(false)}
                className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl relative z-10
                ${!Goal2 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                Growth
              </button>

              {/* Hover animation button {Growth} */}
              <button
                className={`absolute left-68.5 bg-orange-500 text-white px-10 py-40 rleative overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
                ${Goal2 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                Growth
              </button>

              {/* Normal button {Community} */}
              <button
                onMouseEnter={() => setGoal3(true)} onMouseLeave={() => setGoal3(false)}
                className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl relative z-10
                ${!Goal3 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                Community
              </button>

              {/* Hover animation button {Community} */}
              <button
                className={`absolute right-0 bg-orange-500 text-white px-10 py-40 rleative overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
                ${Goal3 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                Community
              </button>
            </div>
          </div>
        </div>

        <section className="w-full">
          <img src="/image.png" alt="Image 2" className="object-cover w-full h-auto" />
        </section>

        <section className="h-screen w-full">
          <img src="/image.webp" alt="Image 3" className="object-cover w-full h-auto" />
        </section>
      </main>
    </div>
  );
}
