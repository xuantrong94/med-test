import { getGuides } from '@/shared/endpoints/patient-guide.endpint';
import GuideItem from './GuideItem';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const HuongDanBenhNhanContent = async () => {
  const { rows: guides } = await getGuides();
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ul className=''>
          {guides.map(guide => (
            <li key={guide.id}>
              <GuideItem {...guide} />
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
};

export default HuongDanBenhNhanContent;
