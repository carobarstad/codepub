import { QuizContent } from '@/types/Item';

const Quiz = ({ item }: { item: QuizContent }) => {
  return (
    <>
      <div className=''>Quiz {item.question}</div>
      {item.options.map((option, index) => (
        <div key={index}>
          <div> option {index}: </div>
          <div>{option}</div>
        </div>
      ))}
    </>
  );
};

export default Quiz;
