import { checkAnswer } from '@/api/quiz';
// import { checkAnswer } from '@/api/quiz';
import { QuizOptions } from '@/components/QuizOption';
import { QuizContent } from '@/types/ContentItem';

const Quiz = ({ item }: { item: QuizContent }) => {
  const handleAnswer = async (option: string) => {
    const answer = await checkAnswer(item.id, option);
    return answer;
  };

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
