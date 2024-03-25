import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carInfoApi = createApi({
    reducerPath: 'carInfoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65ffdf6edf565f1a61456b2b.mockapi.io/' }),
    endpoints: (builder) => ({
      fetchCarsApi: builder.query({
        query: () => {
          return {
            url: "cars",
            method: "GET"
          }
        },
      }),
    }),
  })
  

export const {useFetchCarsApiQuery} = carInfoApi