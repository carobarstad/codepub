import { QuizOptions } from '@/components/QuizOption';
import { QuizContent } from '@/types/ContentItem';

const Quiz = ({ item }: { item: QuizContent }) => {
  // We send this function to not expose the answer in the client component unless this function is invoked
  const getAnswer = async () => {
    'use server';
    return item.solution;
  };

  return (
    <div className='mt-10 max-w-md mx-auto flex flex-col items-center'>
      <QuizOptions question={item.question} options={item.options} getAnswer={getAnswer} />
    </div>
  );
};

export default Quiz;
