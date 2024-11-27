import BackButton from '@/components/BackButton';
import { getItemById } from '@/serverActions/serverActions';
import { ContentSwitch } from '@/utils/ContentSwitch';
import { notFound } from 'next/navigation';

const CalendarDayPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const idAsInt = parseInt(id);

  const calendarData = await getItemById(idAsInt);

  if (!calendarData) {
    notFound();
  }
  return (
    <div className='flex flex-col h-full'>
      <div className='flex mb-10'>
        <BackButton />
        <div className='ml-4 text-[#084f62]'>Day {id} of the calendar</div>
      </div>
      <div className='flex-1'>
        <ContentSwitch item={calendarData} />
      </div>
    </div>
  );
};

export default CalendarDayPage;
