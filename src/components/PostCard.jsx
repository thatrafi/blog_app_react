import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import defaultImage from '../images/codeimage.jpeg'
import userIcon from '../images/user-icon.png'
import dateIcon from '../images/date-icon.png'

const PostCard = (props) => {

const truncate = (str,limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
}
const today = moment().toString()

var userName = props.post.userId

if(props.post.userData){
    userName = props.post.userData.name
}


  return (
    <div className="shadow-lg rounded-lg p-0 pb-20 mb-8 blue-glassmorphism outline-none">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img src={defaultImage} 
            alt={props.post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
        </div>
        {props.isPreview && (
            <Link to={`/Post/${props.post.id}`}><h1 className='transition duration-700 text-center mb-8 cursor-pointer text-white hover:text-pink-600 text-3xl font-semibold'>
            {props.isPreview ? truncate(props.post.title,15) : props.post.title}</h1></Link>
        )}
         {!props.isPreview && (
            <h1 className='transition duration-700 text-center mb-8 text-white text-3xl font-semibold'>
            {props.isPreview ? truncate(props.post.title,15) : props.post.title}</h1>
        )}

        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <Link to={`/Author/${props.post.userId}`}>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img src={userIcon} height="30px" width="30px" className="align-middle rounded-full" alt="" />
                    <p className='inline align-middle text-white ml-2 text-lg hover:text-pink'>{userName}</p>
            </div>
            </Link>
            
            <div className='font-medium text-white'>
                <img src={dateIcon} height="40px" width="30px" className="h-6 w-6 inline mr-2" alt="" />
                <span>{today}</span>
            </div>
        </div>
        <p className='text-center text-lg text-white font-normal px-4 lg:px-20 mb-8'> {props.isPreview ? truncate(props.post.body,15) : props.post.body}</p>
        <div className='text-center'>
            {props.isPreview && (
                <Link to={`/Post/${props.post.id}`}><span className='transition duration-500 transform text-white hover:-translate-y-1 hover:bg-pink-600 inline-block text-lg font-medium rounded-full px-8 py-3 cursor-pointer mb-8 white-glassmorphism'>Continue Reading</span></Link>
            )}
        </div>
    </div>
  )
}

export default PostCard