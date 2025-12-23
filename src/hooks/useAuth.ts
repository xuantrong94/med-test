import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  setUserInfo,
  clearUserInfo,
  selectAuth,
  selectIsAuthenticated,
  selectUserInfo,
} from '@/libs/redux/features/auth/authSlice';
import {
  tokenStorage,
  parseUserInfoFromUrl,
  parseUserInfoFromPath,
} from '@/utils/tokenStorage';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const userInfo = useAppSelector(selectUserInfo);

  /**
   * Login user with provided data
   */
  const login = (userData: {
    userId: string;
    userName: string;
    fullName: string;
    email: string;
    token: string;
    userMongoId: string;
  }) => {
    // Save token to localStorage
    tokenStorage.setToken(userData.token);

    // Save user info to Redux store
    dispatch(
      setUserInfo({
        userName: userData.userName,
        fullName: userData.fullName,
        email: userData.email,
        userId: userData.userId,
        userMongoId: userData.userMongoId,
      })
    );
  };

  /**
   * Login from URL parameters (for your specific use case)
   */
  const loginFromUrl = (searchParams: string) => {
    const userData = parseUserInfoFromUrl(searchParams);

    if (userData.token && userData.userId) {
      login({
        userId: userData.userId,
        userName: userData.userName,
        fullName: userData.fullName,
        email: userData.email,
        token: userData.token,
        userMongoId: userData.userMongoId,
      });
      return true;
    }
    return false;
  };

  /**
   * Login from path parameters (for catch-all route)
   */
  const loginFromPath = (pathString: string) => {
    console.log('loginFromPath called with:', pathString);
    const userData = parseUserInfoFromPath(pathString);
    console.log('Parsed userData:', userData);

    if (userData.token && userData.userId) {
      console.log('Valid token and userId found, logging in...');
      login({
        userId: userData.userId,
        userName: userData.userName,
        fullName: userData.fullName,
        email: userData.email,
        token: userData.token,
        userMongoId: userData.userMongoId,
      });
      return true;
    } else {
      console.log('Missing token or userId:', {
        hasToken: !!userData.token,
        hasUserId: !!userData.userId,
        token: userData.token?.substring(0, 20) + '...',
        userId: userData.userId,
      });
    }
    return false;
  };

  /**
   * Logout user
   */
  const logout = () => {
    // Remove token from localStorage
    tokenStorage.removeToken();

    // Clear user info from Redux store
    dispatch(clearUserInfo());
  };

  /**
   * Get current token
   */
  const getToken = () => {
    return tokenStorage.getToken();
  };

  /**
   * Check if user has valid token
   */
  const hasValidToken = () => {
    return tokenStorage.hasToken();
  };

  return {
    // State
    auth,
    isAuthenticated,
    userInfo,

    // Actions
    login,
    loginFromUrl,
    loginFromPath,
    logout,
    getToken,
    hasValidToken,
  };
};
