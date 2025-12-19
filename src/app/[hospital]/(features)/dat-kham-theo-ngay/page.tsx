import FeatureLayout from '@/components/layouts/feature-layout/FeatureLayout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getListPartnerFeatures } from '@/shared/endpoints/partner-feature.endpoint';
import getNameBySlug from '@/utils/getNameBySlug';
export default async function DatKhamTheoNgayPage() {
  const featuresData = await getListPartnerFeatures();
  return (
    <main className='mt-15 lg:mt-30'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/benh-vien-mat'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {getNameBySlug(featuresData, 'dat-kham-theo-ngay')}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <FeatureLayout />
    </main>
  );
}
