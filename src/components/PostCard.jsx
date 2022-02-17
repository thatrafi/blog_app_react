import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import defaultImage from '../images/codeimage.jpeg'
import userIcon from '../images/user-icon.png'
import dateIcon from '../images/date-icon.png'

import { useGetUsersQuery } from '../services/blogApi'

const PostCard = ({post,isPreview}) => {

const truncate = (str,limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
}
const today = moment().toString()
const {data : user, isFetching} = useGetUsersQuery(post.userId);
if(isFetching) return "Loading...."


  return (
    <div className="shadow-lg rounded-lg p-0 pb-20 mb-8 blue-glassmorphism outline-none">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img src={defaultImage} 
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
        </div>
        {isPreview && (
            <Link to={`/Post/${post.id}`}><h1 className='transition duration-700 text-center mb-8 cursor-pointer text-white hover:text-pink-600 text-3xl font-semibold'>
            {isPreview ? truncate(post.title,15) : post.title}</h1></Link>
        )}
         {!isPreview && (
            <h1 className='transition duration-700 text-center mb-8 text-white text-3xl font-semibold'>
            {isPreview ? truncate(post.title,15) : post.title}</h1>
        )}

        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img src={userIcon} height="30px" width="30px" className="align-middle rounded-full" alt="" />
                <p className='inline align-middle text-white ml-2 text-lg'>{user.name}</p>
            </div>
            <div className='font-medium text-white'>
                <img src={dateIcon} height="40px" width="30px" className="h-6 w-6 inline mr-2" alt="" />
                <span>{today}</span>
            </div>
        </div>
        <p className='text-center text-lg text-white font-normal px-4 lg:px-20 mb-8'> {isPreview ? truncate(post.body,15) : post.body}</p>
        <div className='text-center'>
            {isPreview && (
                <Link to={`/Post/${post.id}`}><span className='transition duration-500 transform text-white hover:-translate-y-1 hover:bg-pink-600 inline-block text-lg font-medium rounded-full px-8 py-3 cursor-pointer white-glassmorphism'>Continue Reading</span></Link>
            )}
        </div>
    </div>
  )
}

export default PostCard