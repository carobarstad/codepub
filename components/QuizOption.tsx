'use client';
import React, { useState } from 'react';

export const QuizOptions = ({
  question,
  options,
  getAnswer,
}: {
  question: string;
  options: string[];
  getAnswer: () => Promise<string>;
}) => {
  const [chosenAnswer, setChosenAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const handleSubmitAnswer = async (chosenAnswer: string) => {
    const answer = await getAnswer();
    setCorrectAnswer(answer);
    setChosenAnswer(chosenAnswer);
  };

  const check = (pickedOption: string, currentOption: string) => {
    if (!pickedOption) return 'default';
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
              {option}
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
