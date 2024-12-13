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
    array: ["Front-end", "Back-end", "Full-Stack", "Mern-Stack"],
  },
  {
    filterType: "Salary",
    array: ["0-20K", "21k-40k", "40K-60k", "61k-1Lack"],
  },
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
    <div className="w-full bg-purple-200 p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3 border-t my-4 border-black" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="flex justify-between items-center gap-2 md:inline">
            <h1 className="font-bold text-lg text-left">{data.filterType}</h1>
            <div className="md:hidden">
              <select value={selectedValue} className="bg-white border-none rounded-sm px-2 py-1 " onChange={(e)=>setSelectedValue(e.target.value)} id={index} name={data.filterType} >
             {data.array.map((elem,num) =>{
            
              return (
                <option key={num} className="bg-white border-none " value={data[index]} >{elem}</option>
              )
             }   
              )}
              </select>
            </div>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={idx}>
                  <div
                 
                    className="hidden md:flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
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
