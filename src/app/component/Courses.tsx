import React from 'react'

const Courses = () => {
  return (
    <div>
        <div className='text-center text-3xl mb-[5%] font-bold'>Courses</div>
        <div className="md:grid md:grid-cols-3 gap-[16px] flex flex-col  w-full ">
            <div className='border-white border-2 shadow-md  w-3/3 h-[300px] flex flex-col text-3xl text-white  rounded-xl'>
            <img src="/Mat121.jpeg" alt="billing" className="w-[100%] h-[70%] object-contain relative rounded-xl " />
             <div className='text-xl text-center rounded-t-xl shadow-t-md h-full bg-gradient-to-r from-violet-600 to-indigo-600  border-white border-t-2 shadow-t-md -translate-y-2 z-[5]'>
               <h1 className='mb-[15px] text-white font-bold'>MAT121</h1>
               <a 
                className='border-2 shadow-md pt-1 px-3 rounded-lg text-center font-semibold pb-1 mt-[4px]'
                href="/instruction">Practice</a>
             </div>
            </div>

            <div className='border-white border-2 shadow-md  w-3/3 h-[300px] flex flex-col text-3xl text-white  rounded-xl'>
            <img src="/Phy123.jpg" alt="billing" className="w-[100%] h-[70%] object-contain relative rounded-xl " />
             <div className='text-xl text-center rounded-t-xl shadow-t-md h-full bg-gradient-to-r from-violet-600 to-indigo-600 border-white border-t-2 shadow-t-md -translate-y-2 z-[5]'>
               <h1 className='mb-[15px] text-white font-bold'>PHY123</h1>
               <a 
                className='border-2 shadow-md pt-1 px-3 rounded-lg text-center font-semibold pb-1 mt-[4px]'
                href="/instruction">Practice</a>
             </div>
            </div>

            

            <div className='border-white border-2 shadow-md  w-3/3 h-[300px] flex flex-col text-3xl text-white  rounded-xl'>
            <img src="/Chm121.jpg" alt="billing" className="w-[100%] h-[70%] object-cover relative rounded-xl " />
             <div className='text-xl text-center rounded-t-xl shadow-t-md h-full bg-gradient-to-r from-violet-600 to-indigo-600 border-white border-t-2 shadow-t-md -translate-y-2 z-[5]'>
               <h1 className='mb-[15px] text-white font-bold'>CMH121</h1>
               <a 
                className='border-2 shadow-md pt-[3px] px-3 rounded-lg text-center font-semibold pb-1 mt-[4px]'
                href="/instruction">Practice</a>
             </div>
            </div>

            <div className='border-white border-2 shadow-md  w-3/3 h-[300px] flex flex-col text-3xl text-white  rounded-xl'>
            <img src="/GST103.jpg" alt="billing" className="w-[100%] h-[70%] object-cover relative rounded-xl " />
             <div className='text-xl text-center rounded-t-xl shadow-t-md h-full bg-gradient-to-r from-violet-600 to-indigo-600 border-white border-t-2 shadow-t-md -translate-y-2 z-[5]'>
               <h1 className='mb-[15px] text-white font-bold'>GST121</h1>
               <a 
                className='border-2 shadow-md pt-1 px-3 rounded-lg text-center font-semibold pb-1 mt-[4px]'
                href="/instruction">Practice</a>
             </div>
            </div>
     </div>
    </div>
  )
}

export default Courses