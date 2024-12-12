import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime)=>{
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }

  return (
    <div  onClick={()=>navigate(`/description/${job._id}`)} className="p-4 rounded-md shadow-xl  cursor-pointer bg-purple-200  border border-gray-100">
        <p className="text-sm mb-4 text-black">{daysAgoFunction(job?.createdAt) === 0 ? "Today" :` ${daysAgoFunction(job?.createdAt)} days Ago`}</p>
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 object-contain">
          <img src={job?.company?.logo} alt="company logo" />
        </div>
       <div>
       <h1 className="font-medium text-xl">{job?.company?.name}</h1>
       <p className="text-md text-black">India</p>
       </div>
      </div>
      <div>
        <h1 className="font-bold text-xl my-2">{job?.title}</h1>
        <p className="text-sm text-black"> {job?.description}</p>
      </div>
      <div className="flex items-center mt-10 gap-4">
        <Badge className="text-green-700 text-md px-3 bg-white font-bold" variant="ghost">{job?.position} position</Badge>
        <Badge className="text-[#920aa7] bg-white text-md px-3 font-bold" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-[#F83002] bg-white text-md px-3 font-bold" variant="ghost">{job?.salary}LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
