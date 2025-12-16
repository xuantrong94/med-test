import { getGuides } from '@/shared/endpoints/patient-guide.endpint';
import GuideItem from './GuideItem';

const HuongDanBenhNhanContent = async () => {
  const { rows: guides } = await getGuides();
  return (
    <main>
      <ul className=''>
        {guides.map(guide => (
          <li key={guide.id}>
            <GuideItem {...guide} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HuongDanBenhNhanContent;
