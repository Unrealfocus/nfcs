import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-r from-violet-600 to-indigo-600 h-screen p-3 flex flex-col gap-3'>
        <div className='text-center text-lg mt-[10px]'>
            <h1 className='text-white text-3xl text-center italic font-semibold'>Instructions</h1>
            <p className='text-white mt-[2px]'>Course: <span className='font-bold'>PHY123</span></p>
            <p className='text-white mt-[2px]'>Time: <span className='font-bold'>20 :00</span></p>
            <p className='text-white mt-[2px]'>Question: <span className='font-bold'>20</span></p>
        </div>
        <div><img 
          className='object-contain rounded-lg'
          src='/goodluck.jpg' />
        </div>
        <div className='mx-auto'>
          <button
            className='bg-white pt-2 pb-2 px-6 mt-[20px] rounded-xl text-[16px] text-indigo-500 shadow-md '
          ><a href="/quiz">Start Quiz</a>
        </button></div>

        <div className='text-center text-white italic mt-[20%]'>GOODLUCK!!!</div>
    </div>
  )
}

export default page