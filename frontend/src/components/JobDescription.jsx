import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
   const isApplied = true;
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex justify-between items-center'>

        <div> 
        <h1 className='font-bold text-xl'>Front-end Developer</h1>
        <div className="flex items-center my-2 gap-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">12 position</Badge>
        <Badge className="text-[#920aa7] font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">24LPA</Badge>
      </div>
        </div>
      <Button
       disabled={isApplied}
         className={`rouded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#920aa7] hover:bg-[#920aa7bc]'}`}>
            {isApplied ? "Already applied": 'Apply now'}
         </Button>
        </div>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
        <div>
             <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Front-end Developer</span></h1>
             <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Pune</span></h1>
             <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing.</span></h1>
             <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
             <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
             <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
             <h1 className='font-bold my-1'>Posted Data: <span className='pl-4 font-normal text-gray-800'>06/10/2024</span></h1>
        </div>
    </div>
  )
}

export default JobDescription