import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobsByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(setSearchJobsByText(input));
  }, [input]);
  return (
    <div className="bg-purple-900 h-screen">
      <Navbar />
      <div className="max-w-6xl md:mx-auto my-10 mx-4">
        <div className="flex justify-between items-center">
          <Input
            className="w-fit"
            placeholder="Filter By name or Role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            Post New Jobs
          </Button>
        </div>
        <div className="my-10">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
