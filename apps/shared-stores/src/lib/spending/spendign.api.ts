import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../base-query";
import {ISpendingListResponse} from "@shared-types";

const baseUrl = "https://development.sprintform.com/";
const baseQuery = getBaseQuery({baseUrl})

export const spendingApi = createApi({
    reducerPath: "spendingApi",
    baseQuery,
    endpoints: (builder) => ({
        getSpendingList: builder.query<ISpendingListResponse, undefined>({
            query() {
                return {
                    url: "transactions.json",
                    method: "GET",
                }
            }
        })
    })
});

export const {useGetSpendingListQuery} = spendingApi;
