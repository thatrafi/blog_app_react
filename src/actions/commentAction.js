import axios from "axios";

export const GET_COMMENT_LIST = "GET_COMMENT_LIST";
export const ADD_COMMENT_DATA = "ADD_COMMENT_DATA";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCommentsList = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/comments`)
    .then(function (response) {
      // handle success
      dispatch({
          type : GET_COMMENT_LIST,
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
        type : GET_COMMENT_LIST,
        payload : {
            data : false,
            errorMessage : error.message
        }
      })
    })
  }
}

export const addComment = (comment) =>{
    return ( dispatch) => {
        dispatch({
            type : ADD_COMMENT_DATA,
            payload : {
                data : comment,
                errorMessage : false
            }
          })
    }
}