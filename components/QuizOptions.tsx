'use client'; // must be a client component because they are dynamic and use state
import Spinner from '@/components/Spinner';
import { getQuizAnswerById } from '@/serverActions/serverActions';
import { useState, useTransition } from 'react';
import QuizOptionButton from './QuizOptionButton';

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
            <QuizOptionButton
              disabled={!!chosenAnswer}
              onClick={async () => handleSubmitAnswer(option)}
              variant={check(chosenAnswer, option)}
            >
              <div className='flex gap-2 justify-center'>
                {isPending && option === chosenAnswer && <Spinner />}
                {option}
              </div>
            </QuizOptionButton>
          </li>
        ))}
      </ul>
      {correctAnswer && <p className='mt-4'>The correct answer is {correctAnswer}</p>}
    </div>
  );
};

export default QuizOptions;
