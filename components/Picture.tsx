import { ImageContent } from '@/types/ContentItem';
import Image from 'next/image';

const ImageComponent = ({ item }: { item: ImageContent }) => {
  return <Image alt={item.alt} src={item.src} width={500} height={500} />;
};

export default ImageComponent;
