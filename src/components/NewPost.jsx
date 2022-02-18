import React,{useEffect} from 'react'
import { Field, reduxForm,change } from 'redux-form'

import { connect } from 'react-redux'
import { getUserById } from '../actions/userAction'
import postValidation from '../validations/postValidation'

const mapStateToProps = (state) =>{
  return {
    getUserData : state.users.getUserData,
    errorUserData : state.users.errorUserData
  }
}

const NewPost = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

  useEffect(()=>{
    props.dispatch(change("formAddPost","userId","1")) 
    props.dispatch(getUserById(1))
  },[])

  return (
    <div className="w-full container mx-auto h-screen lg:p-10 sm:p-0">
      <div className="white-glassmorphism w-full flex flex-col  items-center">
        <div className="w-full ">
        <form onSubmit={handleSubmit} >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company-website" className="block text-sm font-medium text-white"> Title </label>
                    <div className="mt-1 flex rounded-md shadow-sm blue-glassmorphism">
                      <Field type="text" component="input" name="title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full text-white rounded-md sm:text-sm border-gray-300 bg-transparent" placeholder="Title..."/>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-white"> Body </label>
                  <div className="mt-1 blue-glassmorphism">
                    <Field id="body" component="textarea" name="body" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-transparent text-white mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Body..."/>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Content for your post. URLs are hyperlinked.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white"> User </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <span className='text-white ml-4 font-semibold'>{props.getUserData.name}</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 blue-glassmorphism text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const form = reduxForm({
  form : "formAddPost",
  validate : postValidation,
  enableReinitialize : true
});

export default connect(mapStateToProps,null)(form(NewPost)) 