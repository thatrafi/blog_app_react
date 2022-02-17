import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://jsonplaceholder.typicode.com'

//const createRequest = ( url) => ({url});

export const blogApi = createApi({
    reducerPath : 'blogApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getPosts : builder.query({
            query : (postId) => `/posts/${postId}`
        }),
        getUsers : builder.query({
            query : (userId) => `/users/${userId}`
        })
    })
})

export const {
    useGetPostsQuery,useGetUsersQuery
} = blogApi;