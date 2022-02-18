import React from 'react'
import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'

import { PostCard,Comment } from '.'

import { addComment } from '../actions/commentAction'

import swal from 'sweetalert'

const mapStateToProps = (state) => {
  return {
    getPostsList : state.posts.getPostsList,
    errorPostsList : state.posts.errorPostsList,
    getCommentsList : state.comments.getCommentsList,
    errorCommentsList : state.comments.errorCommentsList
  }
}

const PostDetail = (props) => {
  const {postId} = useParams();

  var postData = false
  
  if(props.getPostsList.length > 0){
    postData = props.getPostsList.find(p=> p.id === parseInt(postId))
  }

  const handleSubmit = (data) =>{
    console.log(data);
    props.dispatch(addComment(data))
    swal("Success!", "Comment is successfully added!", "success")
  }


  return (
    
    <div className="container">
      {(postData === undefined)?(
       <div className="text-white">No Data</div>
      ): ( 
        <div className="flex flex-col w-full ">
            <PostCard post={postData} isPreview={false} />
            <Comment postId={postId} onSubmit={(data) => handleSubmit(data)} />
        </div>
      
      )}
    </div>
  )
}

export default connect(mapStateToProps,null)(PostDetail)  