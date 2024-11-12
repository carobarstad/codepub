import DailyDoor from '@/components/DailyDoor';
import Link from 'next/link';

const CalendarPage = () => {
  // TODO: Hente items fra backend
  const items = [
    { id: 1, title: '1', subtitle: undefined },
    { id: 2, title: '2', subtitle: 'Hei' },
  ]; // todo: typer?
  return (
    <div className='min-h-screen flex justify-center bg-red-600 m-4'>
      <div className='flex items-center gap-4 p-4'>
        {items.map((item) => (
          <Link key={item.id} href={`/calendar/${item.id}`}>
            <DailyDoor key={item.id} title={item.title} subtitle={item.subtitle} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
