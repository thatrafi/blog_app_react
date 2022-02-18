import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm,change } from 'redux-form'

import commentValidation from '../validations/commentValidation'

const mapStateToProps = (state) => {
    return {
      getCommentsList : state.comments.getCommentsList,
      errorCommentsList : state.comments.errorCommentsList
    }
  }

const Comment = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    var commentsData = []

    useEffect(()=>{
        props.dispatch(change("formAddComment","postId",props.postId)) 
      },[])

    if(props.getCommentsList.length > 0){
        commentsData = props.getCommentsList.filter(e => e.postId == props.postId);
     }
  return (
      <div>
          {(commentsData !== undefined)?(
              <div className="w-full white-glassmorphism p-2 pt-4 rounded shadow-lg">
              
              {commentsData.map((item,index)=>(
                  <div className="flex ml-3 my-2" key={index}>
                  <div className="mr-3">
                  <img src="http://picsum.photos/50" alt="" className="rounded-full"/>
                  </div>
                  <div>
                  <h1 className="font-semibold text-white">{item.name}</h1>
                  <h1 className="text-xs text-gray-400">{item.email}</h1>
                  <p className="text-md text-gray-300">{item.body}</p>
                  </div>
                  </div>
              ))}
              
             
             <div className="mt-3 p-3 w-full">
                 <h1 className="font-semibold text-xl text-white">New Comment</h1>
             </div>
             <form onSubmit={handleSubmit}>
                <div className="p-3 w-full">
                    <Field component="input" type="text" name='name' className="border rounded w-full" placeholder="Name..."/>
                </div>
                <div className="p-3 w-full">
                    <Field component="input" type="email" name='email' className="border rounded w-full" placeholder="Email..."/>
                </div>
                <div className="p-3 w-full">
                    <Field component="textarea" rows="3" name='body' className="border p-2 rounded w-full" placeholder="Write something..."/>
                </div>
            
                <div className="flex justify-between mx-3">
                    <div><button type='submit' className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
                </div>
             </form>
             </div>
          ):null}
      </div>
    
        
            
  )
}

const form = reduxForm({
    form : "formAddComment",
    validate : commentValidation,
    enableReinitialize : true
  });
  
  export default connect(mapStateToProps,null)(form(Comment)) 