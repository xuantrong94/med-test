import { gioiThieuContent } from './data';

export default async function Content() {
  return (
    <section className='container mt-16 space-y-2 rounded-lg border border-gray-300 bg-white p-5 md:p-10 lg:mt-0 lg:-translate-y-20 lg:p-14'>
      {gioiThieuContent.greeting}
      <ul className='my-3 ml-2 list-inside list-disc space-y-2'>
        {gioiThieuContent.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{gioiThieuContent.commitment}</p>
      <p>{gioiThieuContent.footer}</p>
    </section>
  );
}
