'use server'
import fs from 'fs';
import path from 'path';

// Function to read quiz data from JSON file
const getCalendarData = () => {
  // Resolve the path to the JSON file
  const quizDataFilePath = path.resolve('./api', 'calendarDays.json');
  const fileContents = fs.readFileSync(quizDataFilePath, 'utf8');
  console.log(fileContents);
  
  return JSON.parse(fileContents);
}

export const getItemByIndex = async (index: number) => {
    const data = await getCalendarData()
    if (!data) return null
    if (index < 0 || index > data.length) return null
    return data[index]
}