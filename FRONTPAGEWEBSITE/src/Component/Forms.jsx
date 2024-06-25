import React from 'react'

const Forms = () => {
  return (
    <div className='place-content-center bg-white text-black p-8 hover:shadow-lg'>
    <div className='text-center text-3xl py-3'>Sign Up for Free !!</div>
    <div className='grid'>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-300 ' placeholder='First Name'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-300' placeholder='Last Name'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-300' placeholder='Address'></input></div>
    <div className='py-3'><input type="textarea" className=' resize-none rounded-md border border-grey px-40 py-2 bg-gray-300' placeholder='destination'></input></div>
    <div className='py-3'><button type="submit" className='bg-blue-500 text-white rounded-full px-40 py-3 hover:bg-sky-800 hover:shadow-lg'>Submit</button></div>

    </div>
    </div>
  )
}

export default Forms