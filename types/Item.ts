export type TextContent = {
  type: 'text';
  header: string;
  text: string;
};

export type QuizContent = {
  type: 'quiz';
  question: string;
  solution: string;
  options: string[];
};

export type ImageContent = {
  type: 'image';
  src: string;
  alt: string;
};

export type QuoteContent = {
  type: 'quote';
  text: string;
  header: string;
  author?: string;
};

export type Item = TextContent | QuizContent | ImageContent | QuoteContent;

export type ContentType = 'text' | 'image' | 'video' | 'quiz' | 'quote';
