import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='text-center'>
          <div className='flex flex-col gap-5 my-10'>
         <span className='mx-auto py-2 px-4 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
         <h2 className='text-5xl font-bold'>Search , apply <br/> & Get Your <span className='text-[#920aa7]'>Jobs</span></h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate pariatur doloribus quod fuga.</p>
         </div>
         <div className='flex w-1/2 shadow-lg pl-4 items-center rounded-full border border-gray-200 gap-4 mx-auto'>
            <input type="text" placeholder="find your jobs" className='outline-none w-full' />
            <Button className="rounded-r-full bg-[#920aa7]"><Search className="h-5 w-5"/></Button>
         </div>
    </div>
  )
}

export default HeroSection