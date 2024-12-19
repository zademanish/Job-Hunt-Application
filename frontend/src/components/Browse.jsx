import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import Footer from './Footer'


const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return()=>{
            dispatch(setSearchedQuery(""))
        } 
    },[])
  return (
    <div className='bg-gradient-to-b from-[#000707] via-[#4d3b25] to-[#000707]'>
        <Navbar/>
        <div className='max-w-7xl mx-4 md:mx-auto my-10'>
            <h1 className='font-fold text-xl my-10 text-white'>Search Result ({allJobs.length})</h1>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
            {
                allJobs.map((job)=>{
                    return(
                        <Job key={job._id} job={job}/>
                    )
                })
            }
            </div>  
        </div>
        <Footer/>
    </div>
  )
}

export default Browse