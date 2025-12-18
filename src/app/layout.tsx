import { ReactNode } from 'react';
import './globals.css';
import StoreProvider from '@/libs/redux/StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';
import { averta } from '@/config/fonts';
import { cn } from '@/utils/cn';

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
      <body className={cn(averta.variable, 'antialiased')}>
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
