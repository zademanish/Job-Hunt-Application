import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
    const navigate = useNavigate();
  const { companies,searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany,setFileterCompany] = useState(companies);

  useEffect(()=>{
    const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
        if(!searchCompanyByText){
            return true
        };

        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    })

    setFileterCompany(filteredCompany);
  },[companies,searchCompanyByText])
  return (
    <Table>
      <TableCaption>A List of your recent register companies</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead  className="font-bold text-white">Logo</TableHead>
          <TableHead  className="font-bold text-white">Name</TableHead>
          <TableHead  className="font-bold text-white">Date</TableHead>
          <TableHead className="text-right text-white font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filterCompany?.map((company) => (
          <tr key={company._id}>
            <TableCell>
              <Avatar>
                <AvatarImage src={company.logo} />
              </Avatar>
            </TableCell>
            <TableCell>{company?.name}</TableCell>
            <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-28">
                  <div onClick={()=>navigate(`/admin/companies/${company?._id}`)} className="flex items-center w-fit gap-2">
                    <Edit2 className="w-5" />
                    <span className="text-lg">Edit</span>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompaniesTable;
