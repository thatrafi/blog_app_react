import React, { useEffect } from 'react'
import { connect} from 'react-redux'

import { deletePostDetail,addResponsePostData } from '../actions/postAction'


import { Post } from '.'

const mapStateToProps = (state) =>{
  return {
    getResponsePostData : state.posts.getResponsePostData,
    errorResponsePostData : state.posts.errorResponsePostData,
    getPostsList : state.posts.getPostsList,
    errorPostsList : state.posts.errorPostsList
  }
}

const Home = (props) => {

  useEffect(() =>{
    props.dispatch(deletePostDetail())
    if(props.getResponsePostData){
      // get proplist
      if(props.getPostsList){
        if(!props.getPostsList.find(p => p.id === props.getResponsePostData.id)){
          props.dispatch(addResponsePostData(props.getResponsePostData))
        }
      }
      
    }
  })

  return (
    <div className="container">
      <Post />
    </div>
  )
}

export default connect(mapStateToProps,null)(Home)