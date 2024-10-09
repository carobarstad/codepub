import QuizOptions from '@/components/QuizOptions';
import { QuizContent } from '@/types/ContentItem';

const Quiz = ({ item }: { item: QuizContent }) => {
  return (
    <div className='max-w-md mx-auto flex flex-col items-center'>
      <QuizOptions id={item.id} question={item.question} options={item.options} />
    </div>
  );
};

export default Quiz;
