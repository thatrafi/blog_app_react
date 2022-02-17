import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'
import { getPostById} from '../actions/postAction'

import { PostCard } from '.'

const mapStateToProps = (state) => {
  return {
    getPostData : state.posts.getPostData,
    errorPostData : state.posts.errorPostData
  }
}

const PostPreview = (props) => {
  const {postId} = useParams();

  useEffect(() => {
    props.dispatch(getPostById(postId))
  },[])

  return (
    <div className="container h-screen">
       <PostCard post={props.getPostData} isPreview={false} />
    </div>
  )
}

export default connect(mapStateToProps,null)(PostPreview)  