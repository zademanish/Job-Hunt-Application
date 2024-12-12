import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto py-2 px-4 rounded-full bg-purple-300 font-semibold">
          No. 1 Job Hunt Website
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-purple-300">
          Search , apply <br /> & Get Your{" "}
          <span className="text-red-700">Jobs</span>
        </h2>
        <p className="text-purple-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          cupiditate pariatur doloribus quod fuga.
        </p>
      </div>
      <div className="flex md:w-1/2 shadow-lg pl-4 items-center rounded-full border bg-purple-200 border-gray-200 gap-4 mx-auto">
        <input
          type="text"
          placeholder="find your jobs"
          className="outline-none w-full bg-purple-200"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          onClick={searchJobHandler}
          className="rounded-r-full bg-[#920aa7]"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
