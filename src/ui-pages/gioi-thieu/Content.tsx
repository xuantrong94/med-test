import { gioiThieuContent } from './data';

export default async function GioiThieuContent({
  partner,
}: Readonly<{
  partner: string;
}>) {
  const content = gioiThieuContent(partner);
  return (
    <>
      {content.greeting}
      <ul className='my-3 ml-2 list-inside list-disc space-y-2'>
        {content.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.commitment}</p>
      <p>{content.footer}</p>
    </>
  );
}
