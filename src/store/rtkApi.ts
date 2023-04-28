import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { IResponse, ICharacter } from '../api/types';

export const charApi = createApi({
  reducerPath: 'charApi',
  tagTypes: ['Characters'],

  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (build) => ({
    getChars: build.query<IResponse<ICharacter[]>, string>({
      query: (name) => (name ? `?name=${name}` : ''),
    }),
    getCharById: build.query<ICharacter, number>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCharsQuery, useGetCharByIdQuery, useLazyGetCharByIdQuery } = charApi;
