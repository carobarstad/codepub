'use client';

// Error Boundaries must be Client Components since they handle JavaScript errors in the browser

const CalendarDayError = () => {
  return <div className=''>Error! Something went wrong</div>;
};

export default CalendarDayError;
