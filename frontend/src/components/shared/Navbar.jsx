import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth)
  console.log(user)
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center font-medium gap-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/browse'>Browse</Link></li>
           
          </ul>
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to='/login'>
                <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                <Button className="bg-[#920aa7] hover:bg-[#df2dfa]">Signup</Button>
                </Link>
              </div>
            ) :(
              <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h1>{user.fullName}</h1>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 my-2">
                  <div className="flex items-center gap-1">
                    <User2 />
                    <Button variant="link"><Link to="/profile">view profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-1">
                    <LogOut/>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            ) 
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
