import React from 'react'
import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'
import { getUserById } from '../actions/userAction'

import { PostCard } from '.'

const mapStateToProps = (state) => {
  return {
    getPostData : state.posts.getPostData,
    errorPostData : state.posts.errorPostData,
    getPostsList : state.posts.getPostsList,
    errorPostsList : state.posts.errorPostsList,
    getUserData : state.users.getUserData
  }
}

const PostDetail = (props) => {
  const {postId} = useParams();

  var postData = false
  var userName = ""

  if(props.getPostsList.length > 0){
    postData = props.getPostsList.find(p=> p.id === parseInt(postId))
    if(postData !== undefined){
      props.dispatch(getUserById(postData.userId))
      userName = props.getUserData.name
    }
  }

  return (
    
    <div className="container h-screen">
      {(postData === undefined)?(
       <div className="text-white">No Data</div>
      ): ( <PostCard post={postData} isPreview={false} userName={userName} />)}
    </div>
  )
}

export default connect(mapStateToProps,null)(PostDetail)  