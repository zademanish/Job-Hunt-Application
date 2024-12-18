import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'
import store from '@/redux/store'
import { APPLICATION_API_END_POINT } from '@/utils/Constant'

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
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-xl my-5'>Applicants({applicants?.application?.length})</h1>
            <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants