import React from 'react';

type LayoutProps = {
  hero: React.ReactNode;
  content: React.ReactNode;
};

const Layout = ({ hero, content }: LayoutProps) => {
  return (
    <main>
      {hero}
      {content}
    </main>
  );
};

export default Layout;
