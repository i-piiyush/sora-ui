import React from 'react'
import Syldebar from '../sora-components/syldebar'
import { useParams } from 'react-router-dom'

const Demo = () => {
  const {componentKey} = useParams()
  return (
    <div className='bg-zinc-300 w-full  flex justify-center items-center text-5xl font-bold rounded-2xl text-black h-[30rem]'>
       <h1 className="text-center">{componentKey} Demo</h1>
    </div> 
  )
}

export default Demo