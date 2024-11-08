"use client";


import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { questions } from "@/data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";


const Page = () => {
  const title = 'Quiz da minha lalinha 🖤 '
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult]  = useState(false);

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

 const handleAnswered = (answer: number) => {
    setAnswers([... answers, answer]);
    loadNextQuestion();
 }

 const handleRestartButton = () => {
  setAnswers([]);
  setCurrentQuestion(0);
  setShowResult(false);
 }
  
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-600'>
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-t border-gray-300">{title}</div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="p-5">

          {!showResult &&
          <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}></QuestionItem>
          }
            {showResult && 
                <Results questions={questions} answers={answers} />
            }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          <div className="border-t border-gray-300 my-4"></div>
          {showResult &&
          <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>}
          
        </div>
    </div>
    </div>
  );
}

export default Page;