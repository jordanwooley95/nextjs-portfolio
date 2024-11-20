import './globals.css';
import { Inter } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'A portfolio website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
