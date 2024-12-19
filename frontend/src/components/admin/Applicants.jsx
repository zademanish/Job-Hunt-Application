import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'
import store from '@/redux/store'
import { APPLICATION_API_END_POINT } from '@/utils/Constant'
import Footer from '../Footer'

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store=>store.application)
    useEffect(()=>{
        const fetchAllApplicants = async()=>{
            try{
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllApplicants(res.data.job))
                }
            } catch(error){
                console.log(error)
            }
        }
        fetchAllApplicants();
    },[])
  return (
      <div>
            <div className='bg-gradient-to-b from-[#000707] via-[#4d3b25] to-[#000707] text-white'>
        <Navbar/>
        <div className='max-w-7xl mx-auto min-h-screen'>
            <h1 className='font-bold text-xl my-5'>Applicants({applicants?.application?.length})</h1>
            <ApplicantsTable/>
        </div>
          
        </div>
    </div>
  )
}

export default Applicants