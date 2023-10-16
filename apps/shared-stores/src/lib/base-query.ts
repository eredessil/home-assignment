import {fetchBaseQuery} from "@reduxjs/toolkit/query";

interface IGetBaseQuery {
    baseUrl: string;
}

export const getBaseQuery = ({baseUrl} : IGetBaseQuery) => fetchBaseQuery({
    baseUrl: baseUrl
});
