import { QuoteContent } from '@/types/ContentItem';
import { Charm, Roboto } from 'next/font/google';

// Next automatically self-host any Google Font. Here, no requests are sent to Google
// to fetch the font.

const charm = Charm({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const Quote = ({ item }: { item: QuoteContent }) => {
  return (
    <div className='flex justify-center  mt-20'>
      <div className='w-[900px] bg-white p-8 m-2 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 '>
        <div className={`${charm.className} text-4xl`}>“{item.text}”</div>
        {item.author && (
          <p className={`${roboto.className} mt-4 text-right text-gray-600`}>- {item.author}</p>
        )}
      </div>
    </div>
  );
};

export default Quote;
