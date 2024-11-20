import QuizOption from '@/components/QuizOption';
import { QuizContent } from '@/types/Item';

const Quiz = ({ item }: { item: QuizContent }) => {
  return (
    <>
      <div className=''>Quiz {item.question}</div>
      {item.options.map((option, index) => (
        <div key={index}>
          <div> option {index + 1}: </div>
          <QuizOption type='default'>{option}</QuizOption>
        </div>
      ))}
    </>
  );
};

export default Quiz;
