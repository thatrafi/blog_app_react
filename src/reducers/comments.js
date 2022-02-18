import { GET_COMMENT_LIST,ADD_COMMENT_DATA } from "../actions/commentAction";


let initialState = {
    getCommentsList : [],
    errorCommentsList : false
}

const comments = (state = initialState, action) => {
    switch(action.type){
        case GET_COMMENT_LIST :
            return {
                ...state,
                getCommentsList : action.payload.data,
                errorCommentsList : action.payload.errorMessage
            }
        case ADD_COMMENT_DATA :
            return {
                ...state,
                getCommentsList : [action.payload.data, ...state.getCommentsList],
                errorCommentsList : action.payload.errorMessage
            }
        default :
        return state
    }
}

export default comments