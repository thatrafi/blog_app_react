import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetPostsQuery } from '../services/blogApi'
import { PostCard } from '.'

const PostPreview = () => {
  const {postId} = useParams();
  const {data : postData, isFetching} = useGetPostsQuery(postId);
  if(isFetching) return "Loading...."
  return (
    <div className="grid grid-cols-1 gap-12 p-20">
       <PostCard post={postData} isPreview={false} />
    </div>
  )
}

export default PostPreview