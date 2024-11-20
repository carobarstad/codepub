import { getItemByIndex } from '@/api/quiz';
import { Item } from '@/types';
import { ContentSwitch } from '@/utils/ContentSwitch';
import { notFound } from 'next/navigation';

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

const CalendarDayPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const idAsInt = parseInt(id);
  const data = mockDays[idAsInt - 1]; // TODO: Hent info fra backend til den id-en
  const calendarData = await getItemByIndex(idAsInt - 1);

  console.log(calendarData);
  if (!data) {
    notFound();
  }
  return (
    <div className=''>
      CalendarDayPage {id}
      {/* <Snowfall /> */}
      <div>
        <ContentSwitch item={calendarData} />
      </div>
    </div>
  );
};

export default CalendarDayPage;
