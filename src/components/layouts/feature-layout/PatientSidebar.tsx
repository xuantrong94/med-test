import React from 'react';
import { Building } from 'lucide-react';
const PatientSidebar = () => {
  return (
    <div className=''>
      <div className='bg-primary rounded-t-md px-3 py-2 text-white lg:px-5 lg:py-4'>
        Thông tin khám
      </div>
      <div className='border border-t-0'>
        <Building />
      </div>
    </div>
  );
};

export default PatientSidebar;
