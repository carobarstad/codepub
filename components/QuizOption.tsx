'use client';
import { getQuizAnswerById } from '@/api/quiz';
import Spinner from '@/components/Spinner';
import React, { useState, useTransition } from 'react';

interface QuizOptionsProps {
  id: number;
  question: string;
  options: string[];
}

export const QuizOptions = ({ id, question, options }: QuizOptionsProps) => {
  const [chosenAnswer, setChosenAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmitAnswer = async (chosenAnswer: string) => {
    setChosenAnswer(chosenAnswer);
    // startTransition gives us a pending state when we are waiting for the async function
    startTransition(async () => {
      const answer = await getQuizAnswerById(id); // ! This is a server action!
      setCorrectAnswer(answer);
    });
  };

  const check = (pickedOption: string, currentOption: string) => {
    if (!pickedOption || !correctAnswer) return 'default';
    if (pickedOption === currentOption && pickedOption === correctAnswer) return 'success';
    if (pickedOption === currentOption) return 'error';
    return 'default';
  };

  return (
    <div>
      <h2 className='text-lg font-bold mb-4'>{question}</h2>
      <ul className='grid grid-cols-2 gap-2'>
        {options.map((option, index) => (
          <li key={index} className='w-full'>
            <QuizOption
              disabled={!!chosenAnswer}
              onClick={async () => handleSubmitAnswer(option)}
              variant={check(chosenAnswer, option)}
            >
              <div className='flex gap-2 justify-center'>
                {isPending && option === chosenAnswer && <Spinner />}
                {option}
              </div>
            </QuizOption>
          </li>
        ))}
      </ul>
      {correctAnswer && <p className='mt-4'>The correct answer is {correctAnswer}</p>}
    </div>
  );
};

interface QuizOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'default' | 'success' | 'error'; // Custom property
}

const QuizOption: React.FC<QuizOptionProps> = ({ children, variant, onClick, ...props }) => {
  const backgroundColor =
    variant === 'default'
      ? 'bg-slate-300'
      : variant === 'success'
        ? 'bg-green-500 disabled:opacity-100 font-semibold'
        : variant === 'error'
          ? 'bg-red-500 font-semibold'
          : 'bg-slate-300 disabled:opacity-100 ';
  return (
    <button
      disabled={props.disabled}
      onClick={onClick}
      className={`disabled:pointer-events-none hover:bg-slate-500 hover:text-white p-4 w-full text-sm rounded-md ${backgroundColor}`}
    >
      {children}
    </button>
  );
};

export default QuizOption;
