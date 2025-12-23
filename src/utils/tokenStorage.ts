// Token management utilities for localStorage

const TOKEN_KEY = 'auth_token';

export const tokenStorage = {
  /**
   * Save token to localStorage
   */
  setToken: (token: string): void => {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Error saving token to localStorage:', error);
    }
  },

  /**
   * Get token from localStorage
   */
  getToken: (): string | null => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error getting token from localStorage:', error);
      return null;
    }
  },

  /**
   * Remove token from localStorage
   */
  removeToken: (): void => {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error removing token from localStorage:', error);
    }
  },

  /**
   * Check if token exists
   */
  hasToken: (): boolean => {
    return !!tokenStorage.getToken();
  },
};

/**
 * Parse user info from path string (without ?)
 * Example: "userId=0&userName=..."
 */
export const parseUserInfoFromPath = (pathString: string) => {
  console.log('parseUserInfoFromPath input:', pathString);

  // Create URLSearchParams directly from the pathString (already in key=value&key=value format)
  const urlParams = new URLSearchParams(pathString);

  const result = {
    userId: urlParams.get('userId') || '',
    userName: decodeURIComponent(urlParams.get('userName') || ''),
    fullName: decodeURIComponent(urlParams.get('fullName') || ''),
    email: decodeURIComponent(urlParams.get('email') || ''),
    token: urlParams.get('token') || '',
    userMongoId: urlParams.get('userMongoId') || '',
    number: urlParams.get('number') || '',
    historyBookingCount: parseInt(urlParams.get('historyBookingCount') || '0'),
    patientCount: parseInt(urlParams.get('patientCount') || '0'),
    isCS: urlParams.get('isCS') === 'true',
  };

  console.log('parseUserInfoFromPath result:', result);
  return result;
};

/**
 * Parse URL search params to get user info (for backward compatibility)
 */
export const parseUserInfoFromUrl = (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);

  return {
    userId: urlParams.get('userId') || '',
    userName: decodeURIComponent(urlParams.get('userName') || ''),
    fullName: decodeURIComponent(urlParams.get('fullName') || ''),
    email: decodeURIComponent(urlParams.get('email') || ''),
    token: urlParams.get('token') || '',
    userMongoId: urlParams.get('userMongoId') || '',
    number: urlParams.get('number') || '',
    historyBookingCount: parseInt(urlParams.get('historyBookingCount') || '0'),
    patientCount: parseInt(urlParams.get('patientCount') || '0'),
    isCS: urlParams.get('isCS') === 'true',
  };
};
