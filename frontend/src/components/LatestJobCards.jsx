import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl cursor-pointer bg-white border border-gray-100">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, optio.</p>
      </div>
      <div className="flex items-center my-2 gap-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">12 position</Badge>
        <Badge className="text-[#920aa7] font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">24LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
