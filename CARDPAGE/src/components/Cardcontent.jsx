import React from 'react'

const Cardcontent = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='bg-orange-600 text-white'>
            <div className='p-[6rem]'>
            <div className='text-4xl font-bold'>SEDENS</div>
            <div className='pt-10'>Sedans are passenger cars with a three-box configuration, typically featuring four doors and a separate trunk.</div>
            <div className='py-[10rem]'><button type="submit" className='bg-white text-cyan-800 rounded-full px-20 py-3'>Learn More</button></div>
        </div>
        </div>
        <div className='bg-emerald-900 text-white'>
            <div className='p-[6rem]'>
            <div className='text-4xl font-bold'>SUVS</div>
            <div className='pt-10'>Sedans are passenger cars with a three-box configuration, typically featuring four doors and a separate trunk.</div>
            <div className='py-[10rem]'><button type="submit" className='bg-white text-cyan-800 rounded-full px-20 py-3'>Learn More</button></div>
        </div>
        </div>
        <div className='bg-teal-950 text-white'>
            <div className='p-[6rem]'>
            <div className='text-4xl font-bold'>LUXURY</div>
            <div className='pt-10'>Sedans are passenger cars with a three-box configuration, typically featuring four doors and a separate trunk.</div>
            <div className='py-[10rem]'><button type="submit" className='bg-white text-cyan-800 rounded-full px-20 py-3'>Learn More</button></div>
        </div>
        </div>



    </div>
  )
}

export default Cardcontent