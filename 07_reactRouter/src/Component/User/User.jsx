import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
  return (
    <div className='text-center bg-red-400 px-3 py-1 rounded-lg mx-3 text-white text-xl'>User name : {userid}</div>
  )
}

export default User