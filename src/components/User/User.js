import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userId} = useParams()
  return (
    <div className='bg-gray-100 text-black  text-1xl p-4'>User: {userId}</div>
  )
}

