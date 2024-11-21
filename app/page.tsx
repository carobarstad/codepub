import DailyDoor from '@/components/DailyDoor';
import Image from 'next/image';
import Link from 'next/link';
import decoration1 from '../components/assets/decoration1.png';
import decoration2 from '../components/assets/decoration2.png';
import snow from '../components/assets/snow.png';
import { Snowfall } from '../components/snowfall';

const shuffleArray = (array: any[]) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CalendarPage = () => {
  // TODO: Hente items fra backend
  const items = [
    { id: 1, title: '1', subtitle: undefined },
    { id: 2, title: '2', subtitle: 'Hei' },
    { id: 3, title: '3', subtitle: 'Wow' },
    { id: 4, title: '4', subtitle: 'Neii' },
    { id: 5, title: '5', subtitle: 'Neii' },
    { id: 6, title: '6', subtitle: 'Neii' },
    { id: 7, title: '7', subtitle: 'Neii' },
    { id: 8, title: '8', subtitle: 'Neii' },
    { id: 9, title: '9', subtitle: 'Neii' },
    { id: 10, title: '10', subtitle: 'Neii' },
    { id: 11, title: '11', subtitle: 'Neii' },
    { id: 12, title: '12', subtitle: 'Neii' },
    { id: 13, title: '13', subtitle: 'Neii' },
    { id: 14, title: '14', subtitle: 'Neii' },
    { id: 15, title: '15', subtitle: 'Neii' },
    { id: 16, title: '16', subtitle: 'Neii' },
    { id: 17, title: '17', subtitle: 'Neii' },
    { id: 18, title: '18', subtitle: 'Neii' },
    { id: 19, title: '19', subtitle: 'Neii' },
    { id: 20, title: '20', subtitle: 'Neii' },
    { id: 21, title: '21', subtitle: 'Neii' },
    { id: 22, title: '22', subtitle: 'Neii' },
    { id: 23, title: '23', subtitle: 'Neii' },
    { id: 24, title: '24', subtitle: 'Neii' },
  ]; // todo: typer?

  const shuffledItems = shuffleArray(items);

  return (
    <div className='min-h-screen flex justify-center bg-slate-200 h-full'>
      <Snowfall />
      <Image src={decoration1} width={280} alt='decoration' className='absolute top-15 right-0' />
      <Image src={decoration2} width={280} alt='decoration' className='absolute top-15 left-0' />
      <div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-2 h-full py-2 px-4'>
        {shuffledItems.map((item) => (
          <Link key={item.id} href={`/calendar/${item.id}`}>
            <DailyDoor key={item.id} title={item.title} subtitle={item.subtitle} />
          </Link>
        ))}
      </div>
      <Image src={snow} alt='decoration' className='absolute bottom-0 left-0' />
    </div>
  );
};

export default CalendarPage;
