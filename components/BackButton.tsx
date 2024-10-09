'use client'; //has to be client to use useRouter as it is a hook

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrow from './assets/icons/arrow.png';

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      className=' flex items-center hover:cursor-pointer text-black hover:text-[#084f62] hover:underline'
      onClick={() => router.push('/')}
    >
      <div className='mr-2'>
        <Image src={arrow} width={20} alt='back arrow' />
      </div>
      <span>Back to calendar</span>
      <span className='ml-4'>|</span>
    </div>
  );
};

export default BackButton;
