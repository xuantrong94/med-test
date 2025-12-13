import CounterTest from '@/components/CounterTest';
import UserList from '@/components/UserList';

export default function Home() {
  return (
    <div className='bg-gray pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-20 lg:pb-18'>
      <div className='mb-8 flex flex-col items-center justify-center gap-8'>
        <CounterTest />
        <UserList />
      </div>
    </div>
  );
}
