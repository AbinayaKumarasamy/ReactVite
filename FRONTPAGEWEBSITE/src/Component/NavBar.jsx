import React from 'react'

const NavBar = () => {
  return (
    <div> <div className=" md:flex space-x-4">
    <a href="#" className="text-white hover:italic">Home</a>
    <a href="#" className="text-white hover:italic">About</a>
    <a href="#" className="text-white hover:italic">Services</a>
    <a href="#" className="text-white hover:italic">Contact</a>
    <div className=''><button type="submit" className='border rounded-md border-white text-white p-1 hover:italic'>Explore</button></div>

  </div>


  </div>
  )
}

export default NavBar