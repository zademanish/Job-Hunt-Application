import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const {loading} = useSelector(store=>store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [input , setInput] = useState({
    email:"",
    password:"",
    role:""
})
const changeEventHandler = (e)=>{
    setInput({...input,[e.target.name]:e.target.value});
}

const submitHandler=async(e)=>{
  e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${import.meta.env.VITE_USER_API_END_POINT}/login`,input,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      if(res.data.success){
        dispatch(setUser(res.data.user))
        navigate("/")
        toast.success(res.data.message);
      } 

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    } finally{
      dispatch(setLoading(false));
    }
};
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <form
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
          onSubmit={submitHandler}
        >
          <h1 className="font-fond text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="email" />
          </div>   
          <div className="my-2">
            <Label htmlFor="email">Password</Label>
            <Input type="password"name="password" value={input.password} onChange={changeEventHandler} placeholder="password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-3">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" checked={input.role ==='student'} onChange={changeEventHandler} className="cursor-pointer"/>
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="requiter" checked={input.role ==='requiter'} onChange={changeEventHandler} className="cursor-pointer"/>
              <Label htmlFor="option-two">Requiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>please wait</Button>:<Button type="submit" className="w-full my-4">Login</Button>
          }
          <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-800 font-semibold ">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
