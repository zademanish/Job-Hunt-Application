import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import { space } from 'postcss/lib/list';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/Constant';

const ApplicantsTable = () => {
    const shortListing = ["Accepted","Rejected"];
    const {applicants} = useSelector(store=>store.application)
    const statusHandler = async(status,id)=>{
        try{
            const res= await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status},{withCredentials:true});
            if(res.data.success){
                    toast.success(res.data.message);
            }
        } catch(error){
            toast.error(error.response.data.message)
        }
    }
  return (
    <div>
        <Table>
            <TableCaption>
                A list of your recent applied user
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>FullName</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    applicants && applicants?.application.map((item=>(
                        <tr key={item._id}>
                        <TableCell>{item?.applicant?.fullName}</TableCell>
                            <TableCell>{item?.applicant?.email}</TableCell>
                            <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                            <TableCell>
                                {
                                    item?.applicant?.profile?.resume ? <a className="text-blue-500 cursor-pointer" href={item?.applicant?.profile?.resume} target='blank'>{item?.applicant?.profile.resumeOriginalName}</a> : <span>NA</span>
                                    
                                }
                                </TableCell>
                            <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal/>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-32'>
                                    {
                                    shortListing.map((status,index)=>{
                                        return(
                                            <div onClick={()=>statusHandler(status,item?._id)} key={index}>
                                                <span>{status}</span>
                                            </div>
                                        )
                                    })
                                }
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </tr>
                    )))
                }
              
            </TableBody>
        </Table>
    </div>
  )
}

export default ApplicantsTable