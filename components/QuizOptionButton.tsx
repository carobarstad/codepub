interface QuizOptionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'default' | 'success' | 'error'; // Custom property
}

const QuizOptionButton: React.FC<QuizOptionButtonProps> = ({
  children,
  variant,
  onClick,
  ...props
}) => {
  const backgroundColor =
    variant === 'default'
      ? 'bg-slate-300'
      : variant === 'success'
        ? 'bg-green-500 disabled:opacity-100 font-semibold'
        : variant === 'error'
          ? 'bg-red-500 font-semibold'
          : 'bg-slate-300 disabled:opacity-100 ';
  return (
    <button
      disabled={props.disabled}
      onClick={onClick}
      className={`disabled:pointer-events-none hover:bg-slate-500 hover:text-white p-4 w-full text-sm rounded-md ${backgroundColor}`}
    >
      {children}
    </button>
  );
};

export default QuizOptionButton;
