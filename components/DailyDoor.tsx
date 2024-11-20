'use client';
import { DailyDoorItem } from '@/types/';

const DailyDoor = ({ title }: DailyDoorItem) => {
  //TODO: see if possible to have as background
  return (
    <div className='flex border border-white bg-cyan-700 rounded w-40 h-40 items-center justify-center'>
      <h1 className='text-4xl font-semibold text-white'>{title}</h1>
    </div>
  );
};

export default DailyDoor;
