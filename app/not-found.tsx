import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='m-4'>
      <h1>Calendar day not found!</h1>
      <p>Maybe you're lost</p>
      <Link href='/' className='hover:text-green-500 hover:scale-100 mt-4 bg-yellow-200 p-2 '>
        Click here to go back to start
      </Link>
    </div>
  );
}
