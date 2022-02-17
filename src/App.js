import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'

import { Navbar,Home,Footer,NewPost,Author,PostPreview } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/NewPost' element={<NewPost/>} />
        <Route path='/Author' element={<Author/>} />
        <Route path='/Post/:postId' element={<PostPreview/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

export default App