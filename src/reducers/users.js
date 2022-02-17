import { GET_USER_DETAIL,GET_USERS_LIST } from '../actions/userAction'

let initialState = {
    getUserData : false,
    errorUserData : false,
    getUsersList : [],
    errorUsersList : false
}

const users = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DETAIL :
            return {
                ...state,
                getUserData : action.payload.data,
                errorUserData : action.payload.errorMessage
              }
        case GET_USERS_LIST :
            return {
                ...state,
                getUsersList : action.payload.data,
                errorUsersList : action.payload.errorMessage
                }
        default :
        return state
    }
}

export default users