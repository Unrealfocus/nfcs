"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation' 
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { handleNext, handlePrev ,handleAnswer} from '../../redux/slices/QuestionHandlerSlice'
export interface AnswerStore {
  question: number;
  option: string;
}

const page = () => {
  const questions = useSelector((state: RootState) => state.QuestionHandle.questions)
  const CurrentQuestion = useSelector((state: RootState) => state.QuestionHandle.CurrentQuestion)
  const AnswerSheet = useSelector((state: RootState) => state.QuestionHandle.AnswerSheet)
  const score = useSelector((state: RootState) => state.QuestionHandle.score)
  const router = useRouter()
  
  return (
    <div className='flex flex-col bg-gradient-to-r from-violet-600 to-indigo-600 h-screen px-3 '>
       <div className='nav '><h1 className='text-center text-xl text-white'>Result</h1></div> 
       <div className='image  object-contain mx-auto rounded-lg'>
         <img 
          className='object-contain rounded-lg'
          src='/result.jpg' />
        </div>
       <div className='result__details flex flex-row gap-[2px]'>
          <div className='w-1/3  bg-white border rounded-lg flex flex-col text-center  mt-[16px] mr-[2px]'>
              <div className='h-[60%] w-full'>
              <img 
                className='object-contain rounded-lg'
                src='/questions.png' />
              </div>
              <p className='text-center text-indigo-500'> Questions {questions.length}</p>
          </div>
          <div className='w-1/3  bg-white border rounded-lg flex flex-col text-center  mt-[16px] mr-[2px]'>
          <div className='h-[60%] w-full'>
              <img 
                className='object-contain rounded-lg'
                src='/check.png' />
              </div>
              <p className='text-center text-indigo-500'> Answer {AnswerSheet.length}</p>
          </div>
          <div className='w-1/3  bg-white border rounded-lg flex flex-col text-center mt-[16px]'>
          <div className='h-[60%] w-full'>
              <img 
                className='object-conver rounded-lg'
                src='/percentage.png' />
              </div>
              <p className='text-center text-indigo-500'> Score {score}</p>
          </div>
       </div>
       <div className='inspiration_speech text-white text-[18px] font-semibold p-2 rounded-lg'>
        <h1>keep trying don't give up
       
        </h1>
       </div>
       <div className='button flex flex-row justify-between gap-2'>
        <button 
           onClick={()=>router.push('/correction')}
         className='p-2 border border-white w-full rounded-lg bg-white text-indigo-500 mr-[8px]'
         >Review
        </button>
        <button
         onClick={()=>router.push('/')}
          className='p-2 border border-white w-full rounded-lg text-white'
        >Home
        </button>
       </div>
    </div>
  )
}

export default page