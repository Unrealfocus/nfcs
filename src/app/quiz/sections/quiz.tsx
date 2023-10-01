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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          // You can add logic here to handle 
          router.push('/result')

        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const sendAnswer = (answer:any) =>{
    dispatch(handleAnswer(answer))
  }

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

  useEffect(()=>{
    // checker(pickedAnsw);
  },[])

  return (
    <div className='bg-gradient-to-r from-violet-600 to-indigo-600 h-screen p-3'>
        {/* https://uizard.io/templates/mobile-app-templates/quiz-mobile-app/ */}
        <p className='text-white'>{formatTime(time)}</p>       
      <div className='mb-[20%]'>
      <h1 className='text-md mt-[10%] text-center mb-[5%] text-white '>Questions <span>{CurrentQuestion + 1}</span> out {questions.length}</h1>
      <p className='text-center text-white font-bold'>{questions[CurrentQuestion].question}</p>
      </div>
      <ul>
        {questions[CurrentQuestion].options.map((option:any, index:any) => (
          <li
           className={` p-3 mb-3 rounded-lg ${checker(option?.text,CurrentQuestion)?'bg-[green] text-white':''}  bg-white text-black`} 
            key={index} onClick={() => sendAnswer(option.text)}>
            {option.text}
          </li>
        ))}
      </ul>
      <div className='flex flex-row gap-4 w-[70%] mt-[10%] mx-auto'>
        <button 
          onClick={() =>  {console.log(AnswerSheet) 
            dispatch(handlePrev())}}
         className='w-full text-red-500 font-bold bg-white p-3'>Prev</button>
        <button 
          onClick={() => dispatch(handleNext())}
         className='w-full text-green-500 bg-white font-bold p-3'>Next</button>
      </div>
      <div className='mx-auto w-[30%] mt-[5%]'>
        <button 
          onClick={() => {
            dispatch(handleSolution())
            router.push('/result')}
          }
         className='bg-white rounded-lg p-3 w-full'>submit</button>
      </div>
    </div>
  );
};

export default Quiz;