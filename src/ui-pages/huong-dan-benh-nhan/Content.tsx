import { getGuides } from '@/shared/endpoints/patient-guide.endpint';
import GuideItem from './GuideItem';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const HuongDanBenhNhanContent = async ({
  partnerId,
  hospital,
}: {
  partnerId: string;
  hospital: string;
}) => {
  const { rows: guides } = await getGuides(partnerId);
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ul className=''>
          {guides.map(guide => (
            <li key={guide.id}>
              <GuideItem
                {...guide}
                hospital={hospital}
              />
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
};

export default HuongDanBenhNhanContent;
