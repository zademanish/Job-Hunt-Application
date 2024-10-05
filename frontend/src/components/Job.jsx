import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500">2 days ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/abstract-heart-gradient-logo_269830-1167.jpg?w=1060" />
          </Avatar>
        </Button>
        <div>
            <h1 className="font-medium text-lg">Company Name</h1>
            <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam voluptates officia vel optio voluptatum!</p>
      </div>
      <div className="flex items-center my-2 gap-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">12 position</Badge>
        <Badge className="text-[#920aa7] font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">24LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#920aa7]">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
