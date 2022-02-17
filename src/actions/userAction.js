import axios from "axios";

export const GET_USER_DETAIL = "GET_USER_DETAIL"
export const GET_USERS_LIST = "GET_USERS_LIST"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getUserById = (userId) => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/users/${userId}`)
            .then(function (response) {
            // handle success
            dispatch({
                type : GET_USER_DETAIL,
                payload : {
                    data : response.data,
                    errorMessage : false
                }
            })
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            dispatch({
                type : GET_USER_DETAIL,
                payload : {
                    data : false,
                    errorMessage : error.message
                }
            })
            })
    }
}

export const getUsersList = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/users`)
            .then(function (response) {
            // handle success
            dispatch({
                type : GET_USERS_LIST,
                payload : {
                    data : response.data,
                    errorMessage : false
                }
            })
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            dispatch({
                type : GET_USERS_LIST,
                payload : {
                    data : false,
                    errorMessage : error.message
                }
            })
            })
    }
}

