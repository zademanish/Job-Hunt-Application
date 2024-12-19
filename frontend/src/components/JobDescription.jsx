import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { toast } from "sonner";
import Navbar from "./shared/Navbar";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/Constant";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true); // update the local state
        const updatedSingleJob = {
          ...singleJob,
          application: [...singleJob.application, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); // help us to real time ui update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.application.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
  return (
    <div className="bg-gradient-to-b from-[#000707] via-[#4d3b25] to-[#000707] h-screen">
      <Navbar />
      <div className="max-w-7xl mx-4 md:mx-auto my-10 bg-white rounded-md border p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex items-center my-2 gap-4">
              <Badge className="text-blue-700 font-bold" variant="ghost">
                {singleJob?.position} position
              </Badge>
              <Badge className="text-[#920aa7] font-bold" variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className="text-[#F83002] font-bold" variant="ghost">
                {singleJob?.salary}LPA
              </Badge>
            </div>
          </div>
          <Button
            onClick={isApplied ? null : applyHandler}
            disabled={isApplied}
            className={`hidden md:block rouded-lg ${
              isApplied
                ? "bg-gray-900 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600"
            }`}
          >
            {isApplied ? "Already applied" : "Apply now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          {singleJob?.description}
        </h1>
        <div>
          <h1 className="font-bold my-1">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.title}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.location}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.description}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.experienceLevel}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.salary} LPA
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.application?.length}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Data:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.createdAt?.split("T")[0]}
            </span>
          </h1>
          <Button
            onClick={isApplied ? null : applyHandler}
            disabled={isApplied}
            className={`my-4 md:hidden rouded-lg ${
              isApplied
                ? "bg-gray-900 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600"
            }`}
          >
            {isApplied ? "Already applied" : "Apply now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
