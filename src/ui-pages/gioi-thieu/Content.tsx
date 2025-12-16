import { gioiThieuContent } from './data';

export default async function GioiThieuContent() {
  return (
    <>
      {gioiThieuContent.greeting}
      <ul className='my-3 ml-2 list-inside list-disc space-y-2'>
        {gioiThieuContent.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{gioiThieuContent.commitment}</p>
      <p>{gioiThieuContent.footer}</p>
    </>
  );
}
