import { apiSlice } from '@/libs/redux/services/apiSlice';
import { User } from '@/shared/endpoints/user.endpoint';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = userApiSlice;
// Re-export the reducer if needed, but usually apiSlice.reducer handles this.
// If we had extra state unrelated to caching (like 'selectedUserId'), we would keep a separate slice.
// For this simple case, we might not need a userSlice.ts reducer anymore, unless we want to combine them.
// The user asked to "change userSlice", so existing imports might break if we delete it entirely.
// For now, let's just export the query hook and maybe remove the old thunks.
