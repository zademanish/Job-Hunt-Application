import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/Constant.js";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import Footer from "../Footer";

const SignUp = () => {
  const {loading} = useSelector(store=>store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changefileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if(input.file){
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);
      } 

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally{
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#000707] via-[#4d3b25] to-[#000707] min-h-screen text-black">
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <form
          className="w-full mx-4 md:w-1/2 bg-white border border-gray-200 rounded-md p-4 my-28 "
          onSubmit={submitHandler}
        >
          <h1 className="text-center font-bold text-xl mb-5">SignUp</h1>
          <div className="my-2">
            <Label htmlFor="Full name">Full name</Label>
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              placeholder="Fullname"
              className="text-black"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="email"
              className="text-black"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="mobile no"
              className="text-black"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="password"
              className="text-black"
            />
          </div>
          <div className="md:flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-3">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="requiter"
                  checked={input.role === "requiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Requiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-4">
              <Label>Profile</Label>
              <Input
                type="file"
                onChange={changefileHandler}
                accept="image/*"
                className="cursor-pointer"
              />
            </div>
          </div>
          {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>please wait</Button>:<Button type="submit" className="w-full my-4">Signup</Button>
          }
          <span className="text-md ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 ml-4 border-b border-blue-500 font-semibold ">
              Login
            </Link>
          </span>
        </form>
      </div>
      <Footer/> 
    </div>
  );
};

export default SignUp;
