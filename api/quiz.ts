'use server';
import fs from 'fs';
import path from 'path';
import { ContentItem } from '../types/ContentItem';

// Function to read quiz data from JSON file
export const getCalendarData = async () => {
  // Resolve the path to the JSON file
  const quizDataFilePath = path.resolve('./api', 'calendarDays.json');
  const fileContents = fs.readFileSync(quizDataFilePath, 'utf8');
  return new Promise<ContentItem[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.parse(fileContents));
    }, 1500);
  });
};

export const getItemById = async (id: number) => {
  const data = await getCalendarData();

  if (!data) return null;
  if (id < 0 || id > data.length) return null;
  return data.find((d) => d.id === id);
};

export const getQuizAnswerById = async (id: number) => {
  const quizItem = await getItemById(id);

  if (!(quizItem?.type === 'quiz')) return null;

  return quizItem.solution;
};
