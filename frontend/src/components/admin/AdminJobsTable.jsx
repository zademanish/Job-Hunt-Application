import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "@/redux/store";

const AdminJobsTable = () => {
    const {allAdminJobs,searchJobsByText} = useSelector(store=> store.job);
    const [filterJobs,setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

  useEffect(()=>{
    const filteredJobs = allAdminJobs.filter((job)=>{
        if(!searchJobsByText){
            return true
        };
        return job?.title?.toLowerCase().includes(searchJobsByText.toLowerCase()) || job?.company?.name?.toLowerCase().includes(searchJobsByText.toLowerCase());
    })
    setFilterJobs(filteredJobs);
  },[allAdminJobs,searchJobsByText])
  return (
    <Table className="text-white">
      <TableCaption>A List of your recent Posted Jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-white">Company Name</TableHead>
          <TableHead  className="font-bold text-white">Role</TableHead>
          <TableHead  className="font-bold text-white">Date</TableHead>
          <TableHead className="text-right font-bold text-white">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filterJobs?.map((job) => (
          <tr key={job._id}>
           
            <TableCell>{job?.company?.name}</TableCell>
            <TableCell>{job?.title}</TableCell>
            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-38">
                  <div onClick={()=>navigate(`/admin/companies/${job?._id}`)} className="flex items-center w-fit gap-2">
                    <Edit2 className="w-5" />
                    <span className="text-lg">Edit</span>
                  </div>
                  <div onClick={()=>navigate(`/admin/jobs/${job?._id}/applicants`)} className="flex items-center w-fit gap-2 cursor-pointer my-2">
                    <Eye className="w-5" />
                    <span className="text-lg">Applicants</span>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminJobsTable;
