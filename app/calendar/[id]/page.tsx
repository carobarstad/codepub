import { getItemByIndex } from '@/api/quiz';
import { ContentSwitch } from '@/utils/ContentSwitch';
import { notFound } from 'next/navigation';

const CalendarDayPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const idAsInt = parseInt(id);
  const calendarData = await getItemByIndex(idAsInt - 1);

  if (!calendarData) {
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
