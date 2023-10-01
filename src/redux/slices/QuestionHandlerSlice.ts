"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AnswerStore {
  question: number;
  option: string;
}


const initialState: any = {
  AnswerSheet:[],
  CurrentQuestion:0,
  score:0,
  questions:[
    {
      id:1,
      question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vel recusandae dolorum quisquam facere sequi ',
      options: [
        { text: 'Paris', isCorrect: 'true' },
        { text: 'Berlin', isCorrect: 'false' },
        { text: 'Madrid', isCorrect: 'false' },
        { text: 'Rome', isCorrect: 'false' },
      ],
    },
    {
      id:2,
      question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vel recusandae dolorum quisquam facere sequi ',
      options: [
        { text: 'Madrid', isCorrect: 'false' },
        { text: 'Rome', isCorrect: 'false' },
        { text: 'Paris', isCorrect: 'false' },
        { text: 'Berlin', isCorrect: 'true' },
      ],
    },
    {
      id:3,
      question: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae vel recusandae dolorum quisquam facere sequi ',
      options: [
        { text: 'Paris', isCorrect: 'false' },
        { text: 'Berlin', isCorrect: 'false' },
        { text: 'Madrid', isCorrect: 'true' },
        { text: 'Rome', isCorrect: 'false'},
      ],
    },
  ]
}

export const QuestionHandleSlice = createSlice({
  name: 'Question',
  initialState,
  reducers: {
    handlePrev :(state) => {
      const prevQuestion = state.CurrentQuestion - 1;
      if (prevQuestion !=-1 ) {
          state.CurrentQuestion=prevQuestion;
        }
    },

    handleNext :(state) => {
      const nextQuestion = state.CurrentQuestion + 1;
      if (nextQuestion < state.questions.length) {
          state.CurrentQuestion=nextQuestion;
        } 
    },

    handleAnswer :(state, actions) => {
      if(state.AnswerSheet.length<=0)
        {
              state.AnswerSheet=[{
                question:state.CurrentQuestion,
                option:actions.payload
              }]
        }
      else{

        let AvailableQuestion: boolean | undefined = state.AnswerSheet.find((item: AnswerStore): boolean => {
              return item.question === state.CurrentQuestion;
            });
          
        if(AvailableQuestion){
          state.AnswerSheet.map((items:any,index:any)=>
            {
              if(items.question===state.CurrentQuestion)
              state.AnswerSheet[index]= 
                {
                  ...items,
                   option: actions.payload
                  }
            
            })
          }
          
            else {
              state.AnswerSheet=[...state.AnswerSheet,{
                question:state.CurrentQuestion,
                option:actions.payload
              }]
            }
          }
            
    },
    handleSolution:(state) =>{
      state.questions?.map((items:any,index:any)=>{

        let AvailableQuestion: AnswerStore | undefined = state.AnswerSheet.find((item: AnswerStore): boolean => {
          return item.question === index;
        });
        
        if(AvailableQuestion){
          items.options.map((ans:any)=>
            {
              if(ans.isCorrect=='true'){
             
                if(ans.text===AvailableQuestion?.option){
                  ++state.score
                } 
              }
            
            })
         
          }
        })
    }
           
   }
})


export const {handleNext, handlePrev,  handleAnswer, handleSolution}= QuestionHandleSlice.actions

export default QuestionHandleSlice.reducer