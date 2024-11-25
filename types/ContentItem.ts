type BaseContent = {
  day: number;
  allowedToOpen: boolean;
  id: number;
};

export type TextContent = {
  type: 'text';
  header: string;
  text: string;
} & BaseContent;

export type QuizContent = {
  type: 'quiz';
  question: string;
  solution: string;
  options: string[];
} & BaseContent;

export type ImageContent = {
  type: 'image';
  src: string;
  alt: string;
} & BaseContent;

export type QuoteContent = {
  type: 'quote';
  text: string;
  header: string;
  author?: string;
} & BaseContent;

export type ContentItem = TextContent | QuizContent | ImageContent | QuoteContent;

export type ContentType = 'text' | 'image' | 'video' | 'quiz' | 'quote';
