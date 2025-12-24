import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import UserLayout from '@/ui-pages/user/UserLayout';

const UserPage = async ({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) => {
  const { hospital } = await params;

  return (
    <div className='mt-15 lg:mt-30'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${hospital}`}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Thông tin tài khoản</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UserLayout hospital={hospital} />
    </div>
  );
};

export default UserPage;
