import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store.ts';
import Response from '../dto/Response.ts';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Games'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com/fronttemp-service',
  }),
  endpoints: (builder) => ({
    getGames: builder.query<Response, void>({
      query: () => '/fronttemp',
      providesTags: ['Games'],
    }),
  }),
});

export const { useGetGamesQuery } = apiSlice;

const selectGetGames = apiSlice.endpoints.getGames.select();
export const selectIsLoading = (state: RootState) =>
  selectGetGames(state).isLoading;
export const refetchGames = apiSlice.util.invalidateTags(['Games']);
