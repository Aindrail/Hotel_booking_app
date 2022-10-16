import React from 'react'
import Image from 'next/image'
import {ChevronDownIcon} from '@heroicons/react/solid'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]
    xl:h-[600px] 2xl:h-[700px]'>
    
        <Image 
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                <div className='flex items-center  lg:space-x-2 '>
                <p>Scroll Down</p> <ChevronDownIcon className='h-5 md:m-0  m-1  '/>
               </div>
               </button>
         </div> 
    </div>
  )
}

export default Banner