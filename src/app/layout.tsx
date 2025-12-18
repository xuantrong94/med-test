import { ReactNode } from 'react';
import './globals.css';
import StoreProvider from '@/libs/redux/StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { averta } from '@/config/fonts';
import { cn } from '@/utils/cn';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(averta.variable, 'antialiased')}>
        <StoreProvider>{children}</StoreProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
