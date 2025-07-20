'use client';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [Goal1, setGoal1] = useState(false);
  const [Goal2, setGoal2] = useState(false);
  const [Goal3, setGoal3] = useState(false);
  const [GetStarted, setGetStarted] = useState(false);

  return (

    <div className="min-h-screen flex flex-col bg-white">
      
    <div className="scale-[0.9] origin-top-left w-[111.11%] h-[111.11%]"> 
      {/* Sticky Header */}
      <div  className="sticky top-0 z-30 bg-gray-100 shadow-md">
        <div className="h-[80px] bg-gray-100 flex items-center px-5 shadow-md z-10 sticky top-0">
          <img src="/logoipsum-377.svg" alt="Logo" className="h-15 w-15" />
          <h1 className="sticky top-0 text-4xl font-bold text-orange-500 ml-4">Credit Info. Webpage</h1>

          <div className="ml-auto mr-10 hidden md:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold  hover:scale-105"
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

{/* 
        lessons learned: always use flex[x] flex[y] to avoid overflow issues (or zoom in issues ig idk) instead of w[x%] h[y%]
                        also use flex-1 for the main content to make it scrollable
                        also use padding instead of w[x%] h[y%] to avoid overflow issues
                        also  absoulute is fucking disgusting, why tf would i ever use it if it fucks the zoom in and out so much?? (turns out use it for overlapping elements)
                        also min-h-screen > h-screen (i think, i still don't understand it fully)
                        also overflow-y-scroll is dogshit 
                        also flex-grow is sick, i still don't understand it but it works 
                        */}

      {/* Main Scrollable Content */}
      <main className="flex-1 bg-white  ">
        <div className="flex min-h-screen">

          {/* LEFT: Image Section */}
          <div className="relative w-full aspect-[16/9]"> {/* maintains ratio across zoom */}
            <img
              src="/stockbs.jpg"
              alt="Image 1"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full h-1/2">
            <div className="absolute bottom-0 w-full h-full bg-white opacity-70" />
            <button className="absolute rounded-full bottom-[20%] left-[15%] w-[20rem] h-[20rem] bg-orange-500 overflow-hidden text-9xl font-bold opacity-100 z-10
            duration-900 hover:scale-105"
            onMouseEnter={() => setGetStarted(true)} onMouseLeave={() => setGetStarted(false)}
                >   <span className="text-[10rem] absolute top-[25%] left-[24%] leading-none">➜</span>
                  </button>
             
             <div className ={`absolute bottom-[20%] left-[15%] w-[20rem] h-[20rem] relative `}>
              <h1 className={`absolute text-7xl whitespace-nowrap top-65 text-orange-500 font-bold font-serif transition-all
                ${GetStarted ? 'duration-1000 opacity-100 translate-x-[90%] ' : ' translate-x-0  opacity-0'}`
              }> Get Started</h1>
             </div>
            </div>

            
          </div>


          {/* RIGHT: ABOUT US Section */}
          <div className="flex-[0.1] min-h-screen flex flex-col items-center relative overflow-visible">

            {/* i dont understand why but flex-grow helped me out here to make the line-ABOUT US-line thing, need to look into it more */}
            {/* Title */}
            <div className= 'flex items-center w-full mt-10 px-30 gap-4 my-1'>
              <div className="flex-grow h-[3px] bg-orange-500" />
              <div className="flex-grow h-[60px] rounded-lg  bg-orange-500 flex items-center justify-center shadow-md">
                <h1 className="text-4xl font-bold text-white font-serif whitespace-nowrap">ABOUT US</h1>
              </div>
              <div className="flex-grow h-[3px] bg-orange-500" />
            </div>

            {/* Paragraph */}
            <div className="mt-1 px-8 py-6 max-w-[90%] rounded-lg text-orange-700   leading-relaxed">
              <p className=" text-3xl text-center font-serif">
                Credit Info is dedicated to empowering individuals and businesses with accurate,
                transparent, and secure credit insights. We simplify complex financial data into
                clear reports that support smarter decisions. Our mission is to promote financial
                literacy and responsibility by providing easy access to vital credit information.
              </p>
            </div>

            <div className="flex w-full items-center mt-10 px-30 gap-4 my-1">
              <div className="flex-grow h-[3px] bg-orange-500" />
              <div className ="flex-grow  py-3 rounded-lg bg-orange-500 flex items-center justify-center shadow-md">
                <h1 className="text-4xl font-bold font-serif text-white whitespace-nowrap">GOALS</h1>
              </div>
              <div className="flex-grow h-[3px] bg-orange-500" />
            </div>

            <div className="mt-3 px-8 py-6 max-w-[90%] flex justify-center rounded-lg gap-6 text-orange-500 relative leading-relaxed ">

              {/* im a genius */}
              
              {/* TUNRS OUT YOU CAN DO THE HOVER ANIMATION JUST WITH "hover:scale-105" AND "group-hover" I AM RETARDED? IDK */}

              {/* normal button {Innovation} */}
              <button onMouseEnter={() => setGoal1(true)} onMouseLeave={()=>setGoal1(false)}
              className={`outline outline-3 outline-orange-500 text-orange-600 px-10 py-40 transition-all   rounded-lg font-bold font-serif text-3xl relative z-10 
              ${!Goal1 ? 'duration-[1100ms] pr-10 py-10 opacity-100' : 'duration-[0ms] max-h-0 p-0 opacity-0'} `}>
                Innovation
              </button>     

              {/* Hover animation button {Innovation} */}
              <button 
              className={`absolute right-123 bg-orange-500 text-white px-12 py-41 transition-all  duration-700 ease-in-out overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
              ${Goal1 ? 'pr-10 pl-10 w-[36%] h-[93%] bottom-5 opacity-100 shadow-2xl' : 'max-h-0 p-0 opacity-0'}`}>
                Innovation
              </button> 
                {/* i also made it get a little bigger on hover with transition animation with the w-[34%] h-[93%] and bottom-5) */}



              {/* normal button {Growth} */}
              <button onMouseEnter={()=> setGoal2(true)} onMouseLeave={()=>setGoal2(false)}
              className={`outline outline-3 outline-orange-500 text-orange-600 px-10 py-40 rounded-lg transtion-all font-bold font-serif text-3xl  relative z-10
              ${!Goal2 ? 'duration-[1100ms] pr-10 py-10 opacity-100' : 'duration-[0ms] max-h-0 p-0 opacity-0'}`}> 
                Growth
              </button>   

              {/* Hover animation button {Growth} */}
              <button 
              className={`absolute left-64.5 bg-orange-500 text-white px-10 py-40 rleative duration-700 ease-in-out   overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
              ${Goal2 ? 'py-10 w-[29.5%] h-[96%] mr-30 bottom-3 opacity-100 shadow-2xl' : 'max-h-0 p-0 opacity-0'}`}>
                Growth
              </button>

              {/* normal button {Community} */}
              <button onMouseEnter={()=> setGoal3(true)} onMouseLeave={()=>setGoal3(false)} 
              className={`outline outline-3 outline-orange-500 text-orange-600 px-10 py-40 rounded-lg font-bold font-serif text-3xl  relative z-10
              ${!Goal3 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                Community 
              </button>    

              {/* Hover animation button {Community} */}   
              <button 
              className={`absolute right-0 bg-orange-500 text-white px-10 py-40 rleative  overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
              ${Goal3 ? 'pr-10 py-10 opacity-100 shadow-2xl' : 'max-h-0 p-0 opacity-0'}`}>
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
    </div>
  );
}
