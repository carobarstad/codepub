import { PictureContent } from '@/types/ContentItem';
import Image from 'next/image';

const Picture = ({ item }: { item: PictureContent }) => {
  return (
    <div className='mx-auto relative w-3/4 h-full'>
      <Image alt={item.alt} src={item.src} objectFit='contain' layout='fill' />
    </div>
  );
};

export default Picture;
