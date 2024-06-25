import React from 'react'
import NavBar from './Component/NavBar'
import Forms from './Component/Forms'
const App = () => {
  return (
    <div className='bg-blue-500 p-10 text-white w'>
      <div className='flex justify-between items-center'>
      <div className='text-2xl' > LANDING</div>
      <div className=''><NavBar /></div>
      </div>
      <div className='flex justify-between items-center'>
      <div className='w-1/2' ><div className='text-6xl hover:italic size-auto'>Fly Makes You Faster</div>
        <div className='py-9'><p>Faster travel refers to the ability to reach destinations in significantly reduced time compared to traditional modes of transportation, often facilitated by advancements in technology, infrastructure, and travel methods. This concept is crucial in improving efficiency, connectivity, and accessibility across regions and is increasingly shaping the future of global transportation systems.</p></div>
        <div><p>A sample serves as a representative example or a specimen that showcases the qualities or characteristics of a larger group or category. It provides a tangible illustration or demonstration that aids in understanding and evaluating something more complex or abstract. Samples are essential in various fields, including science, research, marketing, and manufacturing, where they play a crucial role in experimentation, analysis, quality assurance, and decision-making processes.</p></div>
        <div className='py-2'><button type="submit" className='bg-green-500 text-white rounded-full px-40 py-3 hover:bg-green-800 hover:shadow-lg'>Explore</button></div>

      </div>
      <div className='py-10'>
        <div className='shadow-2xl'><Forms></Forms></div></div>
      </div>
    </div>
  )
}

export default App