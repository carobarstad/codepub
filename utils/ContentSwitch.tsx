import Picture from '@/components/Picture';
import Quiz from '@/components/Quiz';
import Quote from '@/components/Quote';
import { ContentItem } from '@/types/ContentItem';
import { FC } from 'react';

export const ContentSwitch: FC<{ item: ContentItem }> = ({ item }) => {
  switch (item.type) {
    case 'image':
      return <Picture item={item} />;

    case 'quiz':
      return <Quiz item={item} />;

    case 'quote':
      return <Quote item={item} />;
  }
};
