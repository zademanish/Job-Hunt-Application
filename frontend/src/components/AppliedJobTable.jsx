import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
  return (
    <div className='md:px-8'>
        <Table >
            <TableCaption>
                A list of your applied Job
            </TableCaption>
            <TableHeader>
                <TableRow  className="py-4">
                    <TableHead className="px-2">Date</TableHead>
                    <TableHead className="px-2">Job Role</TableHead>
                    <TableHead className="px-2">Company</TableHead>
                    <TableHead className="md:text-right px-2">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
                {
                    allAppliedJobs.length <= 0 ? <span>You haven't applied any Job.</span> : allAppliedJobs.map((appliedJobs)=>(
                        <TableRow  key={appliedJobs?._id}>
                            <TableCell className="px-2">{appliedJobs.createdAt.split('T')[0]}</TableCell>
                            <TableCell className="px-2">{appliedJobs?.job?.title}</TableCell>
                            <TableCell className="px-2">{appliedJobs.job?.company?.name}</TableCell>
                            <TableCell className="md:text-right px-2"><Badge className={`${appliedJobs?.status === "rejected" ? 'bg-red-500' : appliedJobs?.status === "pending" ? 'bg-gray-500' : 'bg-green-700 hover:bg-green-900'}`}>{appliedJobs?.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    )
                    )
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable