import Quiz from '@/components/Quiz';
import Quote from '@/components/Quote';
import { ContentItem } from '@/types/ContentItem';
import { FC } from 'react';

// type ContentComponentBuilder<T extends Item> = (item: T) => JSX.Element;
// type ComponentMap<T extends Item> = Record<ContentType, ContentComponentBuilder<T>>;

export const ContentSwitch: FC<{ item: ContentItem }> = ({ item }) => {
  console.log('item', item);

  switch (item.type) {
    // case "text":
    //   return( <Quote item={item} />)

    // case "image":
    //   return( <Quote item={item} />)

    case 'quiz':
      return <Quiz item={item} />;

    case 'quote':
      return <Quote item={item} />;
  }
};
