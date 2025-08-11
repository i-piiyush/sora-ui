import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div><button onClick={()=>{
        navigate('/components')
    }} className='px-5 py-3 text-sm bg-zinc-50 text-zinc-900 '>components</button></div>
  )
}

export default Home