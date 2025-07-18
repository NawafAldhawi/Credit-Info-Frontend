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
          <h1 className="sticky top-0 text-4xl font-bold text-orange-600 ml-4">Credit Info. Webpage</h1>

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

{/* 
        lessons learned: always use flex[x] flex[y] to avoid overflow issues (or zoom in issues ig idk) instead of w[x%] h[y%]
                        also use flex-1 for the main content to make it scrollable
                        also use overflow-y-scroll on the main content to make it scrollable
                        also use padding instead of w[x%] h[y%] to avoid overflow issues
                        also  absoulute is fucking disgusting, why tf would i ever use it if it fucks the zoom in and out so much??
                        also min-h-screen > h-screen
                        */}


        {/* Main Scrollable Content */}
     <main className="flex-1 bg-white overflow-y-scroll ">

      <div className="flex min-h-screen">

        {/* LEFT: Image Section */}
        <div className="flex-[3] h-screen">
          <section className="h-screen w-full">
            <img src="/stockbs.jpg" alt="Image 1" className="object-cover w-full h-full" />
          </section>
        </div>

        {/* RIGHT: ABOUT US Section */}
        <div className="flex-[2] min-h-screen flex flex-col items-center relative overflow-visible">

          {/* Title */}
          <div className="px-6 py-3 h-[60px] rounded-lg bg-orange-500 flex absolute top-8 items-center justify-center shadow-md">
            <h1 className="text-4xl font-bold text-white whitespace-nowrap ">ABOUT US</h1>
          </div>

          {/* Paragraph */}
          <div className="mt-24 px-8 py-6 max-w-[90%] rounded-lg text-orange-500   leading-relaxed">
            <p className=" text-3xl text-center font-serif">
              Credit Info is dedicated to empowering individuals and businesses with accurate,
              transparent, and secure credit insights. We simplify complex financial data into
              clear reports that support smarter decisions. Our mission is to promote financial
              literacy and responsibility by providing easy access to vital credit information.
            </p>
          </div>

           <div className ="px-6 py-3 rounded-lg bg-orange-500 flex top-110 shadow-md">
            <h1 className="text-4xl font-bold text-white">GOALS</h1>
           </div>

           <div className="mt-3 px-8 py-6 max-w-[90%] flex justify-center rounded-lg gap-6 text-orange-500 relative leading-relaxed ">

            {/* im a genius */}
            <button onMouseEnter={() => setGoal1(!Goal1)} onMouseLeave={()=>setGoal1(!Goal1)}
            className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl relative z-10 
             ${!Goal1 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'} `}>
              Innovation
            </button>     

            <button 
            className={`absolute left-0 bg-orange-500 text-white px-10 py-40  overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
            ${Goal1 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
              Innovation
            </button>



            <button onMouseEnter={()=> setGoal2(!Goal2)} onMouseLeave={()=>setGoal2(!Goal2)}
            className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl  relative z-10
              ${!Goal2 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`
            }>
              Growth
            </button>   

            <button 
            className={`absolute left-68.5 bg-orange-500 text-white px-10 py-40 rleative  overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
            ${Goal2 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
              Growth
            </button>


            <button onMouseEnter={()=> setGoal3(!Goal3)} onMouseLeave={()=>setGoal3(!Goal3)} 
            className={`outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl  relative z-10
            ${!Goal3 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
              Community 
            </button>    
              
            <button 
            className={`absolute right-0 bg-orange-500 text-white px-10 py-40 rleative  overflow-hidden rounded-lg font-bold font-serif text-3xl z-0
            ${Goal3 ? 'pr-10 py-10 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
              Community
            </button>


            </div>


            {/* <div className={`mt-3 px-8 py-6 max-w-[90%] flex justify-center ounded-lg gap-6 text-orange-500 leading-relaxed ${
            Goal1 ? 'max-h-[200px] pr-20 p-5' : 'max-h-0 p-0'
            }`} >

              <button
              className="outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl">
                Innovation
               </button>     

              <button
              className="outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl">
                Growth
              </button>   

              <button  className="outline outline-3 outline-orange-500 text-orange px-10 py-40 rounded-lg font-bold font-serif text-3xl">
                Community 
              </button>     */}


            {/* </div> */}
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
