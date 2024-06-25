import React from 'react'

const NavBar = () => {
  return (
    <div> <div className=" md:flex items-center">
    <a href="#" className="text-gray-400 hover:text-white px-9">Home</a>
    <a href="#" className="text-gray-400 hover:text-white px-9">About</a>
    <a href="#" className="text-gray-400 hover:text-white px-9">Services</a>
    <a href="#" className="text-gray-400 hover:text-white px-9">Pricing</a>
    <select
            id="dropdown"
            name="dropdown"
            className="text-gray-400 bg-transparent"
          >
            <option value="" >DropDown</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

    <a href="#" className="text-gray-400 hover:text-white px-9">Contact</a>
    <button type="submit" className=' rounded-md bg-blue-500 text-white hover:text-gray-400 p-3 px-9'>Get a Quote</button>

  </div>
  
  
  </div>
  )
}

export default NavBar