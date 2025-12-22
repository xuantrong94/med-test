import { getGuide } from '@/shared/endpoints/patient-guide.endpint';

type Props = {
  slug: string;
  hospital: string;
};

const MainPost = async ({ slug, hospital }: Props) => {
  const { title, content, description, createdAt } = await getGuide(
    slug,
    hospital
  );
  return (
    <>
      <h1 className='mb-4 text-3xl leading-normal font-bold text-pretty'>
        {title}
      </h1>
      <em className='mb-4 inline-flex text-gray-500'>{createdAt}</em>
      <div className='bg-cyan/15 border-cyan/50 border-l-primary relative mb-4 border border-l-6 p-4 md:p-6'>
        <p>{description}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className='article-content'
      ></div>
    </>
  );
};

export default MainPost;
