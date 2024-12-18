import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    useEffect(()=>{
        dispatch(setSearchCompanyByText(input))
    },[input])
    return (
        <div className='bg-purple-900 min-h-screen'>
            <Navbar />
            <div className='max-w-6xl text-white md:mx-auto my-10 mx-4'>
                <div className='flex justify-between items-center'>
                    <Input className="w-fit text-black" placeholder="Filter By name" onChange={(e)=>setInput(e.target.value)} />
                    <Button onClick={()=>navigate('/admin/companies/create')}>New Company</Button>
                </div>
                <div className='my-10'>
                    <CompaniesTable/>
                </div>
            </div>
        </div>
    )
}

export default Companies