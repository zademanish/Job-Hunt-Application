import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJob = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#920aa7]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 my-5 gap-4">
        {randomJob.slice(0,6).map((job, index) => (
          <LatestJobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
