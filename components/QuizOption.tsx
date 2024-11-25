import React from 'react';

const QuizOption = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'default' | 'success' | 'error';
}) => {
  const backgroundColor =
    type === 'default'
      ? 'bg-slate-300'
      : type === 'success'
        ? 'bg-green-500'
        : type === 'error'
          ? 'bg-red-500'
          : 'bg-slate-300';
  return (
    <button className={`h-10 p-2 text-sm hover:bg-blue-200 rounded-md ${backgroundColor}`}>
      {children}
    </button>
  );
};

export default QuizOption;
