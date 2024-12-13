import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { motion } from "framer-motion";

const Jobs = () => {
  const {allJobs,searchedQuery} = useSelector(store=>store.job);
  const [filterJobs,setFilterJobs] = useState(allJobs);

  useEffect(()=>{
    if(searchedQuery){
      const filteredJobs = allJobs.filter((job)=>{
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchedQuery.toLowerCase()) 
        
      })
      setFilterJobs(filteredJobs);
    }else{
      setFilterJobs(allJobs)
    }
  },[allJobs,searchedQuery])
  return (
    <div className="bg-purple-900 ">
      <Navbar />
      <div className="max-w-7xl mx-auto my-5 px-4">
        <div className=" md:flex gap-5">
          <div className="my-5 md:my-0 md:block w-20%">
            <FilterCard  />
          </div>
          {filterJobs.length < 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[84vh] overflow-y-auto  pb-5">
              <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                {
                      filterJobs.map((job) => 
                        <motion.div
                        initial={{opacity:0,x:100 }}
                        animate = {{opacity:1,x:0 }}
                        exit={{opacity:0,x:-100 }}
                        transition={{duration:0.3}}
                        key={job._id} > 
                            <Job job={job}/>
                        </motion.div>
                     )
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
