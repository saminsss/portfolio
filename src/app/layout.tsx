import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Samin Islam Portfolio',
  description: 'Portfolio showcasing skills and blogs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <PageTransition>
          <div className="container py-8">{children}</div>
        </PageTransition>
      </body>
    </html>
  );
}
