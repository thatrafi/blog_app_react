import { GET_POSTS_LIST,GET_POST_DETAIL } from "../actions/postAction"

let initialState = {
    getPostsList : [],
    errorPostsList : false,
    getPostData : false,
    errorPostData : false
}

const posts = (state = initialState, action) => {
  switch(action.type){
    case GET_POSTS_LIST:
      return {
        ...state,
        getPostsList : action.payload.data,
        errorPostsList : action.payload.errorMessage
      }
    case GET_POST_DETAIL:
      return {
        ...state,
        getPostData : action.payload.data,
        errorPostData : action.payload.errorMessage
    }
    default:
      return state;
  }
}

export default posts