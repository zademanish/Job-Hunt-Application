import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {

  const daysAgoFunction = (mongodbTime)=>{
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }

  const navigate = useNavigate()
  return (
    <div className="p-5 rounded-md shadow-xl bg-white">
      <div className="flex justify-between items-center">
      <p className="text-sm text-black">{daysAgoFunction(job?.createdAt) === 0 ? "Today" :` ${daysAgoFunction(job?.createdAt)} days Ago`}</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      </div>
      <div className="flex items-center gap-2 my-2">  
          <div className="h-16 w-16 object-contain">
            <img src={job?.company?.logo} />
          </div>
        <div>
            <h1 className="font-medium text-xl">{job?.company?.name}</h1>
            <p className="text-md text-black">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-xl my-2">{job?.title}</h1>
        <div className="h-10 overflow-hidden">
        <p className="text-sm text-black">{job?.description}</p>
        </div>
      </div>
      <div className="flex items-center my-2 gap-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">{job?.position} position</Badge>
        <Badge className="text-[#920aa7] font-bold" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">{job?.salary}LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Button variant="outline" onClick={()=>navigate(`/description/${job?._id}`)} >Details</Button>
        <Button className="bg-red-800">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
