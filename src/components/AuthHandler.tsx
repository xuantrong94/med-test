import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export const AuthHandler = () => {
  const { loginFromUrl, isAuthenticated, userInfo, logout, getToken } =
    useAuth();

  // Example: Login from URL parameters (your specific case)
  const handleLoginFromYourUrl = () => {
    const urlParams =
      'userId=0&userName=%2B84762611994&fullName=Nguy%E1%BB%85n%20Xu%C3%A2n%20Tr%E1%BB%8Dng&number=&email=%2B84762611994&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IiIsInN1YiI6MCwidXNlck1vbmdvSWQiOiI2NWYyNjkyNTc3YmFjZjAwMjQzYmQ5ZjciLCJpYXQiOjE3NjY0NjMyMDgsImV4cCI6NDkyMjIyMzIwOH0._vSk_OxUg4A_hZVp6A9sEF3l67u3czmhQss5WhLFlYE&historyBookingCount=0&patientCount=0&isCS=false&userMongoId=65f2692577bacf00243bd9f7';

    const success = loginFromUrl(urlParams);
    if (success) {
      console.log('Login successful!');
      console.log('Token saved to localStorage:', getToken());
      console.log('User info saved to Redux:', userInfo);
    } else {
      console.log('Login failed - missing required data');
    }
  };

  // Auto-check if user is already logged in on component mount
  useEffect(() => {
    console.log('Auth status:', { isAuthenticated, userInfo });
  }, [isAuthenticated, userInfo]);

  return (
    <div className='rounded-lg border p-4'>
      <h2 className='mb-4 text-xl font-bold'>Auth Status</h2>

      <div className='mb-4'>
        <p>
          <strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}
        </p>
        {isAuthenticated && (
          <div className='mt-2 space-y-1'>
            <p>
              <strong>Full Name:</strong> {userInfo.fullName}
            </p>
            <p>
              <strong>User Name:</strong> {userInfo.userName}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>User ID:</strong> {userInfo.userId}
            </p>
            <p>
              <strong>MongoDB ID:</strong> {userInfo.userMongoId}
            </p>
            <p>
              <strong>Token:</strong> {getToken()?.substring(0, 50)}...
            </p>
          </div>
        )}
      </div>

      <div className='space-x-2'>
        <button
          onClick={handleLoginFromYourUrl}
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
        >
          Login with URL Data
        </button>

        {isAuthenticated && (
          <button
            onClick={logout}
            className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
