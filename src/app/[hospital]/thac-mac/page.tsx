import PARTNERS from '@/shared/constants/partners';
import QuestionsMainContent from '@/ui-pages/thac-mac/MainContent';
import { notFound } from 'next/navigation';

const Questions = async ({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) => {
  const { hospital } = await params;
  const partner = PARTNERS.find(partner => partner.slug === hospital);
  if (!partner) {
    notFound();
  }
  const faq = partner.faq;
  return (
    <main className='mt-15 lg:mt-30'>
      <div className='bg-linear-45 from-[#6a78d1] to-[#00a4bd] py-15'>
        <div className='flex flex-col items-center'>
          <h1 className='relative w-fit text-center text-2xl font-bold text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-400 after:content-[""] md:text-3xl lg:block lg:text-4xl'>
            Thắc Mắc
          </h1>
          <p className='mt-4 text-center text-white lg:mt-6'>
            Giải đáp các câu hỏi nhanh giúp quý khách hiểu rõ hơn về sản phẩm,
            dịch vụ của chúng tôi.
          </p>
        </div>
      </div>
      <QuestionsMainContent faq={faq} />
    </main>
  );
};

export default Questions;
