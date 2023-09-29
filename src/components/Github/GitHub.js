import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
   
    // const [ data, setData ] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/783Pankaj').then((res)=>res.json()).then((data)=>setData(data))
    // },[])
    //or
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white '>GitHub Followers: {data.following}
    <img src={data.avatar_url }  alt='Git Picture' width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoder = async ()=>{
 const response=  await fetch('https://api.github.com/users/783Pankaj')
 return response.json()
}