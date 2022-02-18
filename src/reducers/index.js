import {combineReducers} from 'redux'
import posts from './posts'
import users from './users'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    posts,users,form : formReducer
})