import { getItemByIndex } from '@/api/quiz';
import BackButton from '@/components/BackButton';
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
      <div className='flex'>
        <BackButton />
        <div className='ml-4 text-[#084f62]'>Day {id} of the calendar</div>
      </div>
      <div>
        <ContentSwitch item={calendarData} />
      </div>
    </div>
  );
};

export default CalendarDayPage;
