import { GET_POSTS_LIST,GET_POST_DETAIL,ADD_POST_DATA,ADD_RESPONSE_POST_DATA } from "../actions/postAction"

let initialState = {
    getPostsList : [],
    errorPostsList : false,
    getPostData : false,
    errorPostData : false,
    getResponsePostData : false,
    errorResponsePostData : false
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
    case ADD_POST_DATA :
      return{
        ...state,
        getResponsePostData : action.payload.data,
        errorResponsePostData : action.payload.errorMessage
      }
    case ADD_RESPONSE_POST_DATA :
    return{
      ...state,
      getPostsList : [action.payload.data, ...state.getPostsList]
    }
    default:
      return state;
  }
}

export default posts