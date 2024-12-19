import React from "react";
import logo from "../assets/logo.webp"
import fb from "../assets/fb.png"
import linkedin from "../assets/Link.png"
import git from "../assets/git1.png"
import user from "../assets/user.png"
const Footer = () => {
  return (
    <>
<div className=" bg-[#000]">
  {/* <div><h1 className="mx-8 text-5xl text-white md:text-center pt-8 font-bold">Footer</h1></div> */}
    <div className="md:max-w-2xl mx-4 py-4 md:mx-40 text-white ">
                <div className="flex items-center">
                    <img src={logo} className="w-16 md:w-18"/>
                    <div>
                        <h1 className="text-4xl font-bold">JOB<span className="text-red-600">HUNT </span> </h1>
                    </div>
                </div>
                <h2 className="mx-2 text-3xl font-bold mt-10">Contact us</h2>
                <div className="">
                <ul className="mx-2 py-6 md:flex gap-20">
                  <a href="#" className="flex items-center p-1 gap-2">
                    <img className="w-5" src={fb} alt="" />
                    <li className="text-xl">FaceBook</li>
                  </a>
                  <a href="https://www.linkedin.com/in/manish-zade-" target="blank" className="flex items-center p-1 gap-2">
                    <img className="w-5" src={linkedin} alt="" />
                    <li className="text-xl">Linkedin</li>
                  </a>
                  <a href="https://github.com/zademanish/Portfolio" target="blank" className="flex items-center p-1 gap-2">
                    <img className="w-5" src={git} alt="" />
                    <li className="text-xl">GitHub</li>
                  </a>
                  <a href="https://manishporfolio.vercel.app" target="blank" className="flex items-center p-1 gap-2">
                    <img className="w-5" src={user} alt="" />
                    <li className="text-xl">Portfolio</li>
                  </a>  
                </ul>
                </div>    
    </div>
</div>
    </>
  );
};

export default Footer;
