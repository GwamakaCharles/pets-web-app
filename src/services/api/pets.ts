/* eslint-disable import/no-unresolved */
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPets } from "interfaces";

// A service using a base URL and expected endpoints
export const petsApi = createApi({
  reducerPath: "petsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    pets: builder.query<IPets, any>({
      query: (arg) => {
        return `/${arg}`;
      },
    }),
  }),
});

// Export hooks for usage in function components, which is
// auto-generated based on the defined endpoints
export const { usePetsQuery } = petsApi;
