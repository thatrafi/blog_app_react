import React from 'react'
import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'

import { PostCard } from '.'

const mapStateToProps = (state) => {
  return {
    getPostsList : state.posts.getPostsList,
    errorPostsList : state.posts.errorPostsList,
  }
}

const PostDetail = (props) => {
  const {postId} = useParams();

  var postData = false

  if(props.getPostsList.length > 0){
    postData = props.getPostsList.find(p=> p.id === parseInt(postId))
  }

  return (
    
    <div className="container h-screen">
      {(postData === undefined)?(
       <div className="text-white">No Data</div>
      ): ( <PostCard post={postData} isPreview={false} />)}
    </div>
  )
}

export default connect(mapStateToProps,null)(PostDetail)  