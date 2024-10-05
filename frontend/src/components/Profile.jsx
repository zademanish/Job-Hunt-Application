import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

const skills = ["Html","css","JavaScript","react"]
const Profile = () => {
  const isResume = true
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://img.freepik.com/premium-vector/abstract-heart-gradient-logo_269830-1167.jpg?w=1060"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, ipsa.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex gap-4 items-center my-2">
            <Mail />
            <span>Manishzade@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center my-2">
            <Contact />
            <span>7875707882</span>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="flex items-center gap-1 my-2">
          {
           skills.length!==0 ? skills.map((item,index)=>
              <Badge key={index}>{item}</Badge>) :<span>NA</span>
            
          }
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
            isResume ? <a target="blank" href="https://www.google.com/" className="text-blue-500 w-full hover:underline cursor-pointer">resume</a> :<span>NA</span>
          }
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1>Applied Job</h1>
          {/* Application Table */}
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
