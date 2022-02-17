import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Routes, Route} from 'react-router-dom'
import { getPostsList,deletePostDetail} from './actions/postAction'
import { getUsersList } from './actions/userAction'

import { Navbar,Home,Footer,NewPost,Author,PostDetail } from './components'

const App = (props) => {
    // call the api and store data to state
    useEffect(()=>{
      props.dispatch(getPostsList())
      props.dispatch(getUsersList())
      props.dispatch(deletePostDetail())
    })
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewPost' element={<NewPost/>} />
        <Route path='/Author/:userId' element={<Author/>} />
        <Route path='/Post/:postId' element={<PostDetail/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

export default connect()(App)