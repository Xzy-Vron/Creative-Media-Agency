import React from 'react'
import TextDisperse from './TextDisperseComponent'

export default function Content() {
  return (
    <div className=' py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <TextDisperse />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Sticky Footer</h1>
            <p>©copyright</p>
        </div>
    )
}

// bg-[#4E4E5A]