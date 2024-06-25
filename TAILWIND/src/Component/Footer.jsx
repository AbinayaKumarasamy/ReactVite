import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-between items-center ml-16 mr-16 pt-5 gap-8'>
    <div className='p-11 box-border border-4 rounded-md w-50 h-50'>
        <div><div className='font-bold text-2xl text-blue-800 py-4'>Lorem epsum</div>
        <div className='text-slate-700'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p></div>
        <div className='text-black p-3 flex items-center gap-3'>Learn More < FaArrowRight /></div>
    </div>
    </div>
    <div className='p-11 box-border border-4 rounded-md w-50 h-50'>
        <div><div className='font-bold text-2xl text-blue-800 py-4'>Dolor setima</div>
        <div className='text-slate-700'><p> Ut enim ad minim veniam, ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p></div>
        <div className='text-black p-3 flex items-center gap-3'>Learn More <FaArrowRight/></div>
    </div>
    </div>
    <div className='p-11 box-border border-4 rounded-md w-50 h-50'>
        <div><div className='font-bold text-2xl text-blue-800 py-4'>Pepsum Mike</div>
        <div className='text-slate-700'><p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p></div>
        <div className='text-black p-3 flex items-center gap-3'>Learn More<FaArrowRight/></div>
    </div>
    </div>
    </div>
  )
}

export default Footer