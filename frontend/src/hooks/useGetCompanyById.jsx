import { SetSingleCompany } from '@/redux/companySlice'
import { setAllJob } from '@/redux/jobSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany =async ()=>{
            try{
                const res = await axios.get(`${process.meta.env.VITE_COMPANY_API_END_POINT}/get/${companyId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(SetSingleCompany(res.data.company));
                }
            } catch(error){
                console.log(error);
            }
        }
        fetchSingleCompany();
    },[companyId,dispatch])


}

export default useGetCompanyById