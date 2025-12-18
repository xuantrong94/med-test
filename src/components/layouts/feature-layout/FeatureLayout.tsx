import DepartmentSelector from './DepartmentSelector';
import PatientSidebar from './PatientSidebar';

export default async function FeatureLayout() {
  return (
    <div className='container grid grid-cols-12 py-6 md:py-9 lg:gap-x-8 lg:py-12'>
      <div className='lg:col-span-4'>
        <PatientSidebar />
      </div>
      <div className='lg:col-span-8'>
        <DepartmentSelector />
      </div>
    </div>
  );
}
