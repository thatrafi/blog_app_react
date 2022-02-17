import React from 'react'
import { connect} from 'react-redux'
import { Post } from '.'



const Home = (props) => {

  return (
    <div className="container">
      <Post />
    </div>
  )
}

export default connect()(Home)