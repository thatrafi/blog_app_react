import React from 'react'

import { useGetPostsQuery } from '../services/blogApi'
import { PostCard } from '.'


const Home = () => {
  const {data : postList, isFetching} = useGetPostsQuery("");
  if(isFetching) return "Loading...."
  return (
    <div className="grid grid-cols-1 gap-12 p-20">
     {postList.map((post,index)=> (
       <PostCard post={post} key={index} isPreview={true}/>
     ) )}
    </div>
  )
}

export default Home