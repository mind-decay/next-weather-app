import { ReactNode } from 'react';

import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';

import '@/styles/reset.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App',
};

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'] });

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
