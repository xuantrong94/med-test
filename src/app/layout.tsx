import { ReactNode } from 'react';
import './globals.css';
import StoreProvider from '@/libs/redux/StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { averta } from '@/config/fonts';
import { cn } from '@/utils/cn';

const metadata = {
  title: 'Medpro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <title>{metadata.title}</title>
      </head>
      <body className={cn(averta.variable, 'antialiased')}>
        <StoreProvider>{children}</StoreProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
