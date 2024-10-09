import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  preload: false,
  fallback: ['sans-serif'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Festive Calendar',
  description: 'Generated by Codepub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} bg-[#267083] flex flex-col h-screen`}>
        <NavBar />
        <div className='flex-1'>{children}</div>
      </body>
    </html>
  );
}
