import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { getPostsList,deletePostDetail,addPostData} from './actions/postAction'
import { getUsersList } from './actions/userAction'
import { getCommentsList } from './actions/commentAction'
import swal from 'sweetalert'

import { Navbar,Home,Footer,NewPost,Author,PostDetail } from './components'



const App = (props) => {

   const navigate = useNavigate()
    // call the api and store data to state
    useEffect(()=>{
      props.dispatch(getCommentsList())
      props.dispatch(getUsersList())
      props.dispatch(deletePostDetail())
      props.dispatch(getPostsList())
    },[])

    const handleSubmit = (data) =>{
      props.dispatch(addPostData(data))
      swal("Success!", "You will be redirected to home!", "success")
      .then(() => {
        navigate('/')
      });
    }

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewPost' element={<NewPost onSubmit={(data) => handleSubmit(data)}/>} />
        <Route path='/Author/:userId' element={<Author/>} />
        <Route path='/Post/:postId' element={<PostDetail/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

export default connect()(App)