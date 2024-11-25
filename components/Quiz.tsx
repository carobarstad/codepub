import QuizOption from '@/components/QuizOption';
import { QuizContent } from '@/types/ContentItem';

const Quiz = ({ item }: { item: QuizContent }) => {
  return (
    <div className='mt-10 max-w-md mx-auto flex flex-col items-center'>
      <h2 className='text-lg font-bold mb-4'>{item.question}</h2>
      <ul>
        {item.options.map((option, index) => (
          <li key={index} className='py-2 border-b border-gray-200 flex justify-center'>
            <QuizOption type='default'>{option}</QuizOption>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
