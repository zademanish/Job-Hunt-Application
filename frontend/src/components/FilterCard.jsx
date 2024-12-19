import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Pune", "Mumbai", "Bangalore", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: ["Front-end", "Back-end", "Full-Stack", "Mern-Stack","Data science","React-Developer","Data Analyst"],
  }
  
];
const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };


  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  return (
    <div className="w-fit  bg-white p-6 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3 border-t my-4 border-black" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="flex justify-between gap-2 items-center  md:inline">
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            <div className="md:hidden">
              <select value={selectedValue} className="bg-white border-none rounded-sm px-2 py-1" onChange={(e)=>setSelectedValue(e.target.value)} id={index} name={data.filterType} >
             {data.array.map((elem,num) =>{
            
              return ( 
                  <option key={num} className="bg-white border-none" value={data[index]} >{elem}</option>
              )
             }   
              )}
              </select>
            </div>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={idx} className="flex items-center justify-center">
                  <div
                 
                    className="hidden w-full  md:flex  gap-2 items-center  my-2"
                  >
                    <div className="max-w-8 ">
                    <RadioGroupItem value={item} id={itemId} />
                    </div>
                    <div className="max-w-40">

                    <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  </div>
               </div>
              
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
