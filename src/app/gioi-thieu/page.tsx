import Layout from '@/components/layouts/static-page/Layout';
import Content from '@/ui-pages/gioi-thieu/Content';
import Hero from '@/ui-pages/gioi-thieu/Hero';

export default function GioiThieu() {
  return (
    <Layout
      hero={<Hero />}
      content={<Content />}
    />
  );
}
