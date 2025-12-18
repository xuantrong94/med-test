'use client';

import { useEffect, useState } from 'react';

/**
 * Debounces a value by delaying updates until after the specified delay
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 500ms)
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up the timeout
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout if value changes or component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Example usage in a search component
 */
// export default function SearchComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearch = useDebounce(searchTerm, 500);
//
//   useEffect(() => {
//     if (debouncedSearch) {
//       Perform search API call here
//       console.log('Searching for:', debouncedSearch);
//     }
//   }, [debouncedSearch]);
//
//   return (
//     <input
//       type="text"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       placeholder="Search..."
//     />
//   );
// }
