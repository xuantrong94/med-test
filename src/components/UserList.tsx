'use client';

import React from 'react';
import { useGetUsersQuery } from '@/libs/redux/features/user/userSlice';

export default function UserList() {
  const { data: users = [], isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <div className='p-4 text-center'>Loading users...</div>;
  }

  if (error) {
    return (
      <div className='p-4 text-center text-red-500'>Error fetching users</div>
    );
  }

  return (
    <div className='mx-auto max-w-4xl p-4'>
      <h2 className='mb-4 text-center text-2xl font-bold'>
        User List from Redux
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {users.map(user => (
          <div
            key={user.id}
            className='rounded border bg-white p-4 text-black shadow transition-shadow hover:shadow-lg'
          >
            <h3 className='text-lg font-bold'>{user.name}</h3>
            <p className='text-sm text-gray-600'>@{user.username}</p>
            <p className='text-sm'>{user.email}</p>
            <p className='mt-2 text-sm font-semibold'>Company:</p>
            <p className='text-sm'>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
