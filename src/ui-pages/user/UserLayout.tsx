'use client';
import React, { Suspense, useCallback } from 'react';
import Loading from '@/app/loading';
import UserSidebar from './UserSidebar';
import { Bell, ClipboardPlus, SquareUser } from 'lucide-react';
import dynamic from 'next/dynamic';

const MedicalExamination = dynamic(
  () => import('@/ui-pages/user/UserContent.MedicalExamination'),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const PatientRecord = dynamic(
  () => import('@/ui-pages/user/UserContent.PatientRecord'),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const Notification = dynamic(
  () => import('@/ui-pages/user/UserContent.Notification'),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

export const USER_FEATURES = [
  {
    key: 0,
    icon: <SquareUser size={18} />,
    label: 'Hồ sơ bệnh nhân',
  },
  {
    key: 1,
    icon: <ClipboardPlus size={18} />,
    label: 'Phiếu khám bệnh',
  },
  {
    key: 2,
    icon: <Bell size={18} />,
    label: 'Thông báo',
  },
];

export type UserFeature = (typeof USER_FEATURES)[number];

const UserLayout = ({ hospital }: { hospital: string }) => {
  const [selectedFeature, setSelectedFeature] = React.useState<UserFeature>(
    USER_FEATURES[0]
  );

  const renderContent = useCallback(() => {
    switch (selectedFeature.key) {
      case 0:
        return <PatientRecord />;
      case 1:
        return <MedicalExamination />;
      case 2:
        return <Notification />;
      default:
        return null;
    }
  }, [selectedFeature.key]);

  return (
    <div className='container mt-5 grid grid-cols-12 md:gap-x-6 lg:mt-10 lg:gap-x-10'>
      <div className='col-span-12 lg:col-span-4'>
        <Suspense fallback={<Loading />}>
          <UserSidebar
            hospital={hospital}
            selectedFeature={selectedFeature}
            setSelectedFeature={setSelectedFeature}
          />
        </Suspense>
      </div>
      <div className='col-span-12 lg:col-span-8'>{renderContent()}</div>
    </div>
  );
};

export default UserLayout;
