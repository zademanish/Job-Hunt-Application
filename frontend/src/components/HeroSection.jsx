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
        <span className="mx-auto py-2 px-4 rounded-full bg-red-600 text-white font-semibold">
          No. 1 Job Hunt Website
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Search , apply <br /> & Get Your{" "}
          <span className="text-red-700">Jobs</span>
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          cupiditate pariatur doloribus quod fuga.
        </p>
      </div>
      <div className="flex md:w-1/2 shadow-lg pl-4 items-center rounded-full  bg-white  gap-4 mx-auto">
        <input
          type="text"
          placeholder="Find your jobs"
          className="outline-none w-full text-black font-semibold  bg-[#0000]"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          onClick={searchJobHandler}
          className="rounded-r-full bg-red-600 hover:bg-red-500 "
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
