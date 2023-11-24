import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../config/constant"

export const reviewApi = createApi({
    reducerPath: "blogApiAPi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    tagTypes: [],

    endpoints: (builder) => ({})
})

export const {} = reviewApi