import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserById } from '../actions/userAction';

import userIcon from '../images/user-icon.png'

const mapStateToProps = (state) => {
  return {
    getUserData : state.users.getUserData,
    errorUserData : state.users.errorUserData
  }
}


const Author = (props) => {

  const {userId} = useParams()
  var address = ""
  var geo = {}
  var company = {}
  var mapLink = ""
  useEffect(() =>{
    props.dispatch(getUserById(userId))
  },[])

  if(props.getUserData.address){
    address = props.getUserData.address;
    geo = props.getUserData.address.geo
    company = props.getUserData.company
    mapLink = `https://maps.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`
    console.log(mapLink);
  }

  return (
    <div className='w-full flex'>
      <div className="white-glassmorphism w-full m-20 items-center flex flex-col">
        <div className="rounded-full border-2 border-white flex my-10 justify-center items-center">
          <img src={userIcon} className="align-middle w-[250px] h-[250px] rounded-full" alt="" />
        </div> 
        <div className="items-center">
          <h1 className="text-white font-semibold text-3xl">{props.getUserData.name}</h1>
        </div>
        <div className="items-center">
          <h1 className="text-white font-semibold text-lg">{props.getUserData.email}</h1>
        </div>
        <div class="grid lg:grid-cols-2 gap-4 p-8 w-full">
          <div>
          <div class="blue-glassmorphism shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-4 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-white">More Information</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and information.</p>
            </div>
            <div class="border-t  blue-glassmorphism">
              <dl>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-white">Username</dt>
                  <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{props.getUserData.username}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-white">Phone</dt>
                  <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{props.getUserData.phone}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-white">Website</dt>
                  <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{props.getUserData.website}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-white">Company</dt>
                  <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{company.name}</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-white">Address</dt>
                  <dd class="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{address.street}<br/>{address.suite}<br/>{address.city}<br/>{address.zipcode}</dd>
                </div>
              </dl>
            </div>
          </div>
          </div>
          <div>
          <iframe src={mapLink} className="w-full h-full sm:rounded-lg"/>
          </div>
        </div>
       
        
      </div>
    </div>
  )
}

export default connect(mapStateToProps,null)(Author)