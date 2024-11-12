import { getItemByIndex } from '@/api/quiz';
import Snowfall from '@/components/snowfall';
import { Item } from '@/types';
import { ContentSwitch } from '@/utils/ContentSwitch';

const mockDay: Item = {
  type: 'quiz',
  question: 'spe',
  solution: 'sd',
  options: ['a'],
  // header: 'Today is a great day',
  // text: 'This is the best quote'
};

const mockDays: Item[] = [
  {
    type: 'quiz',
    question: 'spe',
    solution: 'sd',
    options: ['a'],
    // header: 'Today is a great day',
    // text: 'This is the best quote'
  },
  {
    type: 'quote',
    // question:"spe", solution: "sd", options: ["a", ]
    header: 'Today is a great day',
    text: 'This is the best quote',
  },
];

const CalendarDayPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const idAsInt = parseInt(id);
  const data = mockDays[idAsInt - 1]; // TODO: Hent info fra backend til den id-en
  const calendarData = await getItemByIndex(idAsInt - 1);
  console.log(calendarData);

  return (
    <div className='bg-red-700'>
      CalendarDayPage {id}
      <Snowfall />
      <div>
        <ContentSwitch item={calendarData} />
      </div>
    </div>
  );
};

export default CalendarDayPage;
