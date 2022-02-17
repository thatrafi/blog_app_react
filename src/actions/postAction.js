import axios from "axios";


export const GET_POSTS_LIST = "GET_POSTS_LIST";
export const GET_POST_DETAIL = "GET_POST_DETAIL";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPostsList = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/posts`)
    .then(function (response) {
      // handle success
      dispatch({
          type : GET_POSTS_LIST,
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
        type : GET_POSTS_LIST,
        payload : {
            data : false,
            errorMessage : error.message
        }
      })
    })
  }
};

export const getPostById = (postId) => {
    return (dispatch) => {
      axios.get(`${BASE_URL}/posts/${postId}`)
      .then(function (response) {
        // handle success
        dispatch({
            type : GET_POST_DETAIL,
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
          type : GET_POST_DETAIL,
          payload : {
              data : false,
              errorMessage : error.message
          }
        })
      })
    }
  };

  export const deletePostDetail = () =>{
    return ( dispatch) => {
      dispatch({
        type : GET_POST_DETAIL,
        payload : {
            data : false,
            errorMessage : false
        }
      })
    }
  }