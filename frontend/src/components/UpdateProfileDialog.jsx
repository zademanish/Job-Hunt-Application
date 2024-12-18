import React, { useState } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogFooter } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/Constant";

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading,setLoading] = useState(false)
    const {user} = useSelector(store=>store.auth)
    const [input,setInput] = useState({
        fullName:user?.fullName,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill=>skill),
        file:user?.profile?.resume
    })
    const dispatch = useDispatch();
    const changeEventHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("bio", input.bio);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("skills", input.skills);
        if(input.file){
            formData.append("file", input.file);
        }
        try{
          setLoading(true);
            const res= await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
                headers:{
                    'contentType':'multipart/form-data'
                },
                withCredentials:true
            });

            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }

        } catch(error){
            console.log(error)
            toast.error(error.response.data.message)
        }finally{
          setLoading(false);
        }
        setOpen(false);
         
    }
    const fileChangeHandler =(e)=>{
        const file = e.target.files?.[0];
        setInput({...input, file})
    }
  return (
    <div >
      <Dialog open={open} className="mx-2">
        <DialogContent className="sm:max-w-[425px] bg-purple-900 text-white" onInteractOutside={()=>setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid grid-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" type="text" value={input.fullName} onChange={changeEventHandler} className="col-span-3 bg-purple-200 font-bold text-black" name="fullName" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 my-2">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" value={input.email}  onChange={changeEventHandler} className="col-span-3  bg-purple-200 font-bold text-black" name="email" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 my-2">
                <Label htmlFor="email" className="text-right">
                  Phone
                </Label>
                <Input id="phoneNumber"  value={input.phoneNumber}  onChange={changeEventHandler} className="col-span-3  bg-purple-200 font-bold text-black" name="phoneNumber" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 my-2">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input id="bio" value={input.bio}  onChange={changeEventHandler} className="col-span-3  bg-purple-200 font-bold text-black" name="bio" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 my-2">
                <Label htmlFor="Skills"  className="text-right">
                  Skills
                </Label>
                <Input id="skills" className="col-span-3  bg-purple-200 font-bold text-black" value={input.skills}  onChange={changeEventHandler} name="skills" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 my-2">
                <Label htmlFor="name" className="text-right">
                  Resume
                </Label>
                <Input id="file" onChange={fileChangeHandler} className="col-span-3  bg-purple-200 font-bold text-black" name="file" type="file" accept="application/pdf" />
              </div>
            </div>
            <DialogFooter>
                {
                                loading ? <Button type="submit" className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>please wait</Button>:<Button type="submit" className="w-full my-4">Update</Button>

                }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
