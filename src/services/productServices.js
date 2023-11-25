import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../config/constant"

export const productApi = createApi({
    //reducerPath must be unique
    reducerPath: "productApi",
    //fetchBaseQuery is a boilerplate function to call the baseUrl
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    tagTypes: [],

    //query and mutation
    //if API is for GET then use builder.query
    //If API is for anything other than GET then use builder.mutation

    endpoints: (builder) => ({
        readProduct: builder.query({        //builder.query for GET requests
            query: () =>{
                return({
                    url: "/products",
                    method: "GET",
                })
            }
        }),

        readProductById: builder.query({        //builder.query for GET requests
            query: (id) =>{
                return({
                    url: `/products/${id}`,
                    method: "GET",
                })
            }
        }),

        deleteProduct: builder.mutation({      //builder.mutation for DELETE requests
            query: (id) =>{
                return({
                    url: `/products/${id}`,
                    method: "DELETE",
                })
            }
        }),
        createProduct: builder.mutation({      //builder.mutation for Create requests
            query: (body) =>{
                return({
                    url: "/products",
                    method: "POST",
                    body: body,       //url method and body is required for POST requests
                })
            }
        }),
         
    })
})

export const {useReadProductQuery, useDeleteProductMutation, useReadProductByIdQuery, useCreateProductMutation} = productApi;