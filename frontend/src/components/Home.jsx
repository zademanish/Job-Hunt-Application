import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJob from "./LatestJob";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useNavigate } from "react-router-dom";
const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    // if(user.role ==='requiter'){
    //   navigate('/admin/companies');
    // }

    if (user?.role === null) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="elem_wrapper pb-10">
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
      </div>
      <LatestJob />
      <Footer />
    </div>
  );
};

export default Home;
