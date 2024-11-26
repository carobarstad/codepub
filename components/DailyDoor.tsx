type Props = {
  day: number;
  allowedToOpen: boolean;
};

const DailyDoor = ({ day, allowedToOpen }: Props) => {
  //TODO: see if possible to have as background
  return (
    <div
      className={`flex border border-none rounded w-32 h-32 items-center justify-center ${allowedToOpen ? 'bg-[#8bbdd3]' : 'bg-slate-700'}`}
    >
      <h1 className={`text-4xl font-semibold ' ${allowedToOpen ? 'text-white' : 'text-slate-400'}`}>
        {day}
      </h1>
    </div>
  );
};

export default DailyDoor;
