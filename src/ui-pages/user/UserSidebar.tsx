'use client';
import { cn } from '@/utils/cn';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { UserFeature, USER_FEATURES } from './UserLayout';

type UserSidebarProps = {
  hospital: string;
  selectedFeature: UserFeature;
  setSelectedFeature: (_feature: UserFeature) => void;
};

const UserSidebar = ({
  hospital,
  selectedFeature,
  setSelectedFeature,
}: UserSidebarProps) => {
  return (
    <div className='space-y-6'>
      <Link
        href={`/${hospital}`}
        className='border-gray text-primary hover:bg-primary flex w-fit items-center gap-x-2 rounded-full border px-4 py-2 text-sm shadow-2xl transition-colors hover:border-transparent hover:text-white lg:px-5 lg:py-3'
      >
        <UserPlus size={18} />
        <span>Thêm hồ sơ bệnh nhân</span>
      </Link>
      <div className='space-y-1 lg:space-y-1.5'>
        {USER_FEATURES.map(item => (
          <button
            key={item.key}
            className={cn(
              'hover:bg-gray/10 flex w-full items-center gap-x-2 rounded-r-full px-4 py-2 lg:px-5 lg:py-3',
              selectedFeature.key === item.key
                ? 'bg-primary/20 text-primary font-semibold'
                : 'text-muted-foreground'
            )}
            onClick={() => setSelectedFeature(item)}
          >
            {item.icon}
            <p className='text-sm'>{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserSidebar;
