import Image from 'next/image';
import { Suspense } from 'react';
import { getCalendarData } from '../api/quiz';
import decoration1 from '../components/assets/decoration1.png';
import decoration2 from '../components/assets/decoration2.png';
import snow from '../components/assets/snow.png';
import { CalendarGrid, CalendarGridSkeleton } from '../components/CalendarGrid';
import { Snowfall } from '../components/snowfall';

const CalendarPage = () => {
  const items = getCalendarData();

  return (
    <div className=' flex justify-center overflow-hidden'>
      <Snowfall />
      <Image src={decoration1} width={330} alt='decoration' className='absolute top-15 right-0' />
      <Image src={decoration2} width={330} alt='decoration' className='absolute top-15 left-0' />
      <Suspense fallback={<CalendarGridSkeleton />}>
        <CalendarGrid itemsPromise={items} />
      </Suspense>
      <Image src={snow} alt='decoration' className='absolute bottom-0 left-0 pointer-events-none' />
    </div>
  );
};

export default CalendarPage;
