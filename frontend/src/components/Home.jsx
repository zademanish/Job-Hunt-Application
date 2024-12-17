import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'
import bg1 from "../assets/bg2.jpg"
const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    // if(user.role ==='requiter'){
    //   navigate('/admin/companies');
    // }
    if(user?.role === null){
      navigate('/');
    }
  },[])
  return (
    <>
    <div className='relative bg-purple-900'>
    {/* <img src={bg1} className='absolute z-0 min-h-full' /> */}
 
<div className='sticky'>

    <Navbar /> 
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJob/>
    <Footer/>
</div>
  </div>
   
    
    </>
    
  )
}

export default Home