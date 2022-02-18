import {combineReducers} from 'redux'
import posts from './posts'
import users from './users'
import comments from './comments'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    posts,users,comments,form : formReducer
})