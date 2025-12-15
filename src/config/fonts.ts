import localFont from 'next/font/local';

/**
 * Averta font configuration with multiple weights
 * Uses font-display: swap for optimal loading performance
 * Includes system font fallbacks for better performance
 */
export const averta = localFont({
  src: [
    {
      path: '../assets/fonts/Averta-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Averta-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Averta-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Averta-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-averta',
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
});
