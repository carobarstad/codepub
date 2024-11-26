import { ContentItem } from '@/types/ContentItem';
import Link from 'next/link';
import { use } from 'react';
import DailyDoor from './DailyDoor';

type CalendarGridProps = {
  itemsPromise: Promise<ContentItem[]>;
};

export const CalendarGrid = ({ itemsPromise }: CalendarGridProps) => {
  const items = use(itemsPromise); // React 19 feature "use" to handle promises

  const shuffleArray = (array: ContentItem[]) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffledItems = shuffleArray(items);

  return (
    <div className='grid mt-4 lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 h-full py-2 px-4'>
      {shuffledItems.map((item) => (
        <Link
          key={item.id}
          href={`/calendar/${item.id}`}
          className={item.allowedToOpen ? '' : 'pointer-events-none opacity-90'}
          tabIndex={item.allowedToOpen ? -1 : undefined}
        >
          <DailyDoor key={item.id} day={item.day} allowedToOpen={item.allowedToOpen} />
        </Link>
      ))}
    </div>
  );
};

export const CalendarGridSkeleton = () => {
  const items = [
    // Hardcoded array of items to be displayed in the skeleton
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
    { id: 10, title: '10' },
    { id: 11, title: '11' },
    { id: 12, title: '12' },
    { id: 13, title: '13' },
    { id: 14, title: '14' },
    { id: 15, title: '15' },
    { id: 16, title: '16' },
    { id: 17, title: '17' },
    { id: 18, title: '18' },
    { id: 19, title: '19' },
    { id: 20, title: '20' },
    { id: 21, title: '21' },
    { id: 22, title: '22' },
    { id: 23, title: '23' },
    { id: 24, title: '24' },
  ];
  return (
    <div className='min-h-screen flex justify-center bg-[#267083] h-full'>
      <div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 h-full py-2 px-4'>
        {items.map((item) => (
          <div key={item.id}>
            <div className='flex border bg-gray-300 animate-pulse rounded w-32 h-32 items-center justify-center'></div>
          </div>
        ))}
      </div>
    </div>
  );
};
