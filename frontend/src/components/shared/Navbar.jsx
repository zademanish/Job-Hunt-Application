import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { LogOut, Menu, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/Constant";
import { setUser } from "@/redux/authSlice";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHanderler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-black text-white px-4">
      <div className="flex justify-between items-center mx-auto md:max-w-7xl h-16 ">
        <div>
          <Link to="/" className="text-2xl font-bold flex items-center">
            <div className="w-[4.5rem]">
              <img className="object-cover" src={logo} alt="logo" />
            </div>
            JOB<span className="text-[#F83002]">HUNT</span>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="hidden md:flex items-center font-medium gap-5">
            {user && user.role == "requiter" ? (
              <>
                <li className="font-bold text-xl">
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="font-bold text-xl">
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="font-bold text-xl">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-bold text-xl">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="font-bold text-xl">
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Menu className=" md:hidden h-8 w-8" />
                </PopoverTrigger>
                <PopoverContent className="w-52 text-center pb-6 h-fit">
                  <ul className="md:flex items-center font-medium gap-5">
                    <li className="my-3 text-2xl">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="my-3 text-2xl">
                      <Link to="/jobs">Jobs</Link>
                    </li>
                    <li className="my-3 text-2xl">
                      <Link to="/browse">Browse</Link>
                    </li>
                    <div className="my-5">
                      <Link to="/login">
                        <Button
                          variant="outline"
                          className="text-black px-6 font-semibold text-lg bg-white hover:bg-slate-300"
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                    <div className="my-5">
                      <Link to="/signup">
                        <Button className="bg-red-500 hover:bg-red-800 text-lg  font-semibold px-6">
                          Signup
                        </Button>
                      </Link>
                    </div>
                  </ul>
                </PopoverContent>
              </Popover>
              <div className="hidden md:block md:flex gap-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="text-black px-6  bg-white font-semibold hover:bg-slate-300"
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button className="bg-red-500 hover:bg-red-800 font-semibold px-6">
                    Signup
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="hidden md:block cursor-pointer ">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white">
                  <div className="flex gap-4">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h1>{user.fullName}</h1>
                      <p className="text-sm text-gray-500">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600 my-2">
                    {user && user.role === "student" && (
                      <div className="flex items-center gap-1">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">view profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <LogOut />
                      <Button variant="link" onClick={logoutHanderler}>
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              {/* testing */}

              <Popover>
                <PopoverTrigger asChild>
                  <Menu className=" md:hidden h-8 w-8" />
                </PopoverTrigger>
                <PopoverContent className="w-52 text-center bg-white pb-6 h-fit">
                  <ul className="md:flex items-center font-medium gap-5">
                    {user && user.role == "requiter" ? (
                      <>
                        <li className="my-3 text-2xl">
                          <Link to="/admin/companies">Companies</Link>
                        </li>
                        <li className="my-3 text-2xl">
                          <Link to="/admin/jobs">Jobs</Link>
                        </li>
                        <div className="flex justify-center items-center my-3">
                          <Avatar className="cursor-pointer w-20 h-20">
                            <AvatarImage
                              src={user?.profile?.profilePhoto}
                              alt="@shadcn"
                            />
                          </Avatar>
                        </div>
                        <div className="flex justify-center text-2xl items-center ">
                          <LogOut />
                          <Button
                            variant="link"
                            className="text-2xl mt-2"
                            onClick={logoutHanderler}
                          >
                            Logout
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <li className="my-3 text-xl font-bold">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="my-3 text-xl font-bold">
                          <Link to="/jobs">Jobs</Link>
                        </li>
                        <li className="my-3 text-xl font-bold">
                          <Link to="/browse">Browse</Link>
                        </li>
                        <Link
                          to="/profile"
                          className="flex justify-center items-center my-3"
                        >
                          <Avatar className="cursor-pointer w-16 h-16">
                            <AvatarImage
                              src={user?.profile?.profilePhoto}
                              alt="@shadcn"
                            />
                          </Avatar>
                        </Link>
                        <div className="flex justify-center  items-center ">
                          <LogOut />
                          <Button
                            variant="link"
                            className="text-xl font-bold "
                            onClick={logoutHanderler}
                          >
                            Logout
                          </Button>
                        </div>
                      </>
                    )}
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
