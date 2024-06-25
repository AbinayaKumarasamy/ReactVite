import React from 'react'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import flower from "./assets/pic1.jpg"

const App = () => {
  return (
    <div className=''>
    <div className='bg-blue-950 p-10 text-white'>
      <div className='flex justify-between items-center'>
      <div className='text-2xl' > Logis</div>
      <div className=''><NavBar /></div>
      </div>
      <div className='flex justify-between items-center '>
        <div className='py-11'>
<div className=''><div className='text-6xl font-bold'>Your Lightning Fast Delivery Partner</div>
      <div className='py-9 w-[50rem]'><p>A sample serves as a representative example or a specimen that showcases the qualities or characteristics of a larger group or category. It provides a tangible illustration or demonstration that aids
         in understanding and eva`luating something more complex or abstract.  where they play a crucial role in experimentation, analysis, quality assurance, and decision-making processes.</p></div>
    <div className='py-3'><div className='flex justify-between  bg-white w-1/2'>
      <div className='px-8 py-5 '><input type="textbox" placeholder="Your ZIP code or City"></input></div>
    <div className='py-3 px-2'><button type="submit" className='bg-blue-800 text-white rounded-md  hover:shadow-lg '><div className='p-4'>Search</div></button></div>
</div>
    </div>
         </div></div>
         <div className='py-24 px-20'><img
            src={flower}
            alt="Sample Image"
            className="mx-auto rounded-md"
          /></div>
    </div>
    <div className='flex items-center space-x-8'>
      <div className='flex-none w-44'>
  <div className='border-b-4 border-blue-300 p-4 text-2xl font-bold'>256</div>
  <div className='p-4 text-2xl'>Clients</div>
  </div>
      <div className='flex-initial w-44'>
  <div className='border-b-4 border-blue-300 p-4 text-2xl font-bold'>22</div>
  <div className='p-4 text-2xl'>Projects</div>
  </div>
      <div className='flex-initial w-44'>
  <div className='border-b-4 border-blue-300 p-4 text-2xl font-bold'>24/7</div>
  <div className='p-4 text-2xl'>Supports</div>
  </div>
      <div className='flex-initial w-44'>
  <div className='border-b-4 border-blue-300 p-4 text-2xl font-bold'>44</div>
  <div className='p-4 text-2xl'>Workers</div>
  </div>
  </div>
    </div>

<div>

</div>


    <div><Footer/></div>
    </div>
  )
}

export default App