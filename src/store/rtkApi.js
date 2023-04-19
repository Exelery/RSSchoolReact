import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const charApi = createApi({
    reducerPath: 'charApi',
    tagTypes: ['Characters'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
    endpoints: (build) => ({
        getChars: build.query({
            query: (name) => (name ? `?name=${name}` : ''),
        }),
        getCharById: build.query({
            query: (id) => `${id}`,
        }),
    }),
});
export const { useGetCharsQuery, useGetCharByIdQuery, useLazyGetCharByIdQuery } = charApi;
