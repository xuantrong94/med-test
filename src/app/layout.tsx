import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/libs/redux/StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata() {
  const partnerConfig = await getPartnerConfig();
  return {
    title: partnerConfig.seo_title,
    description: partnerConfig.seo_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
