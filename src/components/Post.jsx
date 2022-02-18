import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { connect } from 'react-redux'

import { PostCard,Loader } from '.'

const { SearchBar } = Search;
const mapStateToProps = (state) => {
    return {
      getPostsList : state.posts.getPostsList,
      errorPostsList : state.posts.errorPostsList,
      getUsersList : state.users.getUsersList,
      errorUsersList : state.users.errorUsersList,
    }
  }


const columns = [{
  dataField: 'id',
  text: 'ID',
  hidden : true
},
{
    dataField: 'postCard',
    text: 'Posts'
}, 
{
  dataField: 'title',
  text: 'Title',
  hidden : true
}];




const Post = (props) => {
  var newArray = []

  if(props.getPostsList){
    newArray = props.getPostsList.map((item,index) => {
      return Object.assign({}, item, { postCard: <PostCard post={item} key={index} isPreview={true} /> });
    });
  }

  return (

    <div>
      {props.getPostsList ? 
        <ToolkitProvider keyField='id' data={ newArray } columns={ columns }  search>
        {
            props => (
            <div>
                <div className="float-right">
                <SearchBar { ...props.searchProps } />
                </div>
                <BootstrapTable
                { ...props.baseProps }
                rowClasses="border-0"
                headerClasses="text-[0px]"
                pagination={ paginationFactory()}
                bordered={ false }
                />
            </div>
            )
        }
      </ToolkitProvider> : <div className="h-screen flex justify-center items-center"><Loader/></div> 
      }
    </div>
    
  )
}

export default connect(mapStateToProps,null)(Post)