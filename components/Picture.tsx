import { PictureContent } from '@/types/ContentItem';
import Image from 'next/image';

const Picuture = ({ item }: { item: PictureContent }) => {
  return <Image alt={item.alt} src={item.src} width={500} height={500} />;
};

export default Picuture;
