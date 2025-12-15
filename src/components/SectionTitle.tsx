export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className='text-text-primary mb-4 text-center text-lg font-semibold uppercase md:mb-8 md:text-2xl lg:text-3xl'>
      {title}
    </h2>
  );
}
