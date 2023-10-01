// src/components/Quiz.js
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation' 
import type { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { handleNext, handlePrev ,handleAnswer, handleSolution} from '../../../redux/slices/QuestionHandlerSlice'

export interface AnswerStore {
  question: number;
  option: string;
}



const Quiz = () => {
  const questions = useSelector((state: RootState) => state.QuestionHandle.questions)
  const CurrentQuestion = useSelector((state: RootState) => state.QuestionHandle.CurrentQuestion)
  const AnswerSheet = useSelector((state: RootState) => state.QuestionHandle.AnswerSheet)
  const dispatch = useDispatch()
  const [time, setTime] = useState(10);
  const router = useRouter()  
  
  const checker = (pickedAnswer:any,index:any):boolean=>{
    const available=AnswerSheet.find((item: AnswerStore): boolean => {
      return item.question === index;

    });
    if(available?.option === pickedAnswer){
      return true
    }
    else{
      return false
    }
  }   

  return (
    <div className='bg-gradient-to-r from-violet-600 to-indigo-600 h-screen p-3'>
        {/* https://uizard.io/templates/mobile-app-templates/quiz-mobile-app/ */}
        <p className='text-white'>0:00</p>       
      <div className='mb-[20%]'>
      <h1 className='text-md mt-[10%] text-center mb-[5%] text-white '>Questions <span>{CurrentQuestion + 1}</span> out {questions.length}</h1>
      <p className='text-center text-white font-bold'>{questions[CurrentQuestion].question}</p>
      </div>
      <ul>
        {questions[CurrentQuestion].options.map((option:any, index:any) => (
          <li
           className={` p-3 mb-3 rounded-lg  ${(checker(option?.text,CurrentQuestion) && (option.isCorrect==="true")) || (option.isCorrect==="true") ?'bg-green-600 text-white':'bg-red-500'} ${checker(option?.text,CurrentQuestion)?'':' bg-white text-black'} `} 
            key={index}>
            {option.text}
          </li>
        ))}
      </ul>
      <div className='flex flex-row gap-4 w-[70%] mt-[10%] mx-auto mr-[16px]'>
        <button 
          onClick={() =>  {console.log(AnswerSheet) 
            dispatch(handlePrev())}}
         className='w-full text-red-500 font-bold bg-white p-3 mr-[px]'>Prev</button>
        <button 
          onClick={() => dispatch(handleNext())}
         className='w-full text-green-500 bg-white font-bold p-3'>Next</button>
      </div>
      <div className='mx-auto w-[30%] mt-[5%]'>
      <button
         onClick={()=>router.push('/')}
          className='p-2 border border-white w-full rounded-lg text-white'
        >Home
        </button>
      </div>
    </div>
  );
};

export default Quiz;