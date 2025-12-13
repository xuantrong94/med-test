'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  increment,
  decrement,
} from '@/libs/redux/features/counter/counterSlice';

export default function CounterTest() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='rounded border bg-white p-4 text-black shadow-md'>
      <h2 className='mb-4 text-xl font-bold'>Redux Toolkit Test</h2>
      <div className='flex items-center gap-4'>
        <button
          className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='font-mono text-2xl'>{count}</span>
        <button
          className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
