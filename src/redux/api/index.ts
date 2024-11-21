import {
    BaseQueryFn,
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  const BaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  });
  
  const baseQueryExtends: BaseQueryFn = async (arg, api, extraOptions) => {
    let result = BaseQuery(arg, api, extraOptions);
    return result;
  };
  
  export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtends,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["todo"],
    endpoints: () => ({}),
  });