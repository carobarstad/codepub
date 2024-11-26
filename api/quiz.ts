'use server';
import fs from 'fs';
import path from 'path';
import { ContentItem, QuizContent } from '../types/ContentItem';

// Function to read quiz data from JSON file
export const getCalendarData = async () => {
  // Resolve the path to the JSON file
  const quizDataFilePath = path.resolve('./api', 'calendarDays.json');
  const fileContents = fs.readFileSync(quizDataFilePath, 'utf8');
  console.log(fileContents);
  return new Promise<ContentItem[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.parse(fileContents));
    }, 1500);
  });
};

export const getItemByIndex = async (index: number) => {
  const data = await getCalendarData();

  if (!data) return null;
  if (index < 0 || index > data.length) return null;
  return new Promise<ContentItem>((resolve, reject) => {
    setTimeout(() => {
      resolve(data[index]);
    }, 1500);
  });
};

export const checkAnswer = async (id: number, answer: string) => {
  const correctAnswer = ((await getItemByIndex(id)) as QuizContent).solution;
  return correctAnswer === answer;
};
