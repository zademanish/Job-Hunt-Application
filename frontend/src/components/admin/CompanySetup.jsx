import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { COMPANY_API_END_POINT } from "@/utils/Constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id)
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const {singleCompany} = useSelector(store=>store.company)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  
  const submitHandler = async(e)=>{
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', input.name)
    formData.append('description', input.description)
    formData.append('website', input.website)
    formData.append('location', input.location)
    if(input.file){
      formData.append('file', input.file);
    }
    try{
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      }
      )
      if(res.data.success){
        setLoading(false);
        toast.success(res.data.message)
        navigate('/admin/companies')
      }
    } catch(error){
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(()=>{
    setInput({
      name: singleCompany.name || "",
    description:singleCompany.description ||  "",
    website: singleCompany.website || "",
    location: singleCompany.location || "",
    file: singleCompany.name || null,
    })
  },[singleCompany]);
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 py-6">
            <Button
              onClick ={()=>navigate('/admin/companies')}
              variant="outline"
              className="flex items-center gap- text-gray-500 font-semibold "
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company set up </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>File</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>please wait</Button>:<Button type="submit" className="w-full my-4">Update</Button>
          }
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
