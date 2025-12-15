import SectionTitle from '@/components/SectionTitle';
import SupportCard from './SupportCard';
import supports from '@/data/supports';

export default function HomeSupports() {
  return (
    <section className='pb-10 md:pb-14 lg:pb-18'>
      <SectionTitle title='Các hình thức hỗ trợ' />
      <ul className='support-cards container grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-7 lg:mt-18 lg:gap-10'>
        {supports.map(item => (
          <li key={item.title}>
            <SupportCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
