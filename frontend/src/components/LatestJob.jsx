import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import store from "@/redux/store";


const LatestJob = () => {
  const {allJobs} = useSelector(store =>store.job)
  return (
  <div className="bg-gradient-to-b from-[#000707] via-[#4d3b25] to-[#000707] py-3">
    <div className="md:max-w-7xl mx-auto my-10">
      <h1 className="text-4xl text-red-700 font-bold px-4">
        <span className="text-white">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-1 px-4 md:grid-cols-3 my-5 gap-4">
        {
        allJobs.length <=0 ? <span>No job Available</span>: allJobs?.slice(0,8).map((job) => 
          
          <LatestJobCards key={job._id} job={job}/>
        )}
      </div>
    </div>
  </div>
   
  );
};

export default LatestJob;
