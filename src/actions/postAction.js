import axios from "axios";


export const GET_POSTS_LIST = "GET_POSTS_LIST";
export const GET_POST_DETAIL = "GET_POST_DETAIL";
export const ADD_POST_DATA = "ADD_POST_DATA"
export const ADD_RESPONSE_POST_DATA = "ADD_RESPONSE_POST_DATA"

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

  export const addPostData = (data) =>{
    return (dispatch) => {
      axios.post(`${BASE_URL}/posts`, data)
      .then(function (response) {
        dispatch({
          type : ADD_POST_DATA,
          payload : {
              data : response.data,
              errorMessage : false
          }
       })
      })
      .catch(function (error) {
        dispatch({
          type : ADD_POST_DATA,
          payload : {
              data : [],
              errorMessage : error.message
          }
        })
      });
    }
  }

  export const addResponsePostData = (data) =>{
    return ( dispatch) => {
      dispatch({
        type : ADD_RESPONSE_POST_DATA,
        payload : {
            data : data,
            errorMessage : false
        }
     })
    }
  }

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