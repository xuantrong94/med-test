import LienHeHero from '@/ui-pages/lien-he/Hero';
import ContactMainContent from '@/ui-pages/lien-he/MainContent';
import React from 'react';

async function Contact({ params }: { params: Promise<{ hospital: string }> }) {
  const { hospital } = await params;
  return (
    <main>
      <LienHeHero />
      <ContactMainContent hospital={hospital} />
    </main>
  );
}

export default Contact;
