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
      async onCacheEntryAdded(
        _unused,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws');

        try {
          await cacheDataLoaded;

          ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            updateCachedData((draft) => {
              draft.data.matches = newMessage.data;
            });
          };
        } catch (error) {
          console.error('WebSocket error:', error);
        }

        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useGetGamesQuery } = apiSlice;

const selectGetGames = apiSlice.endpoints.getGames.select();
export const selectIsLoading = (state: RootState) =>
  selectGetGames(state).isLoading;
export const selectIsError = (state: RootState) =>
  selectGetGames(state).isError;
export const refetchGames = apiSlice.util.invalidateTags(['Games']);
