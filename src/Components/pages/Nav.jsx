import React, { useState } from "react";
import logo from "../../assets/Link.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Btn from "../Props/Btn";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
function Nav() {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handle = () => {
    setToggle(!toggle);
  };

  const drop = () => {
    setDropdown(!dropdown);
  };
  console.log(dropdown);
  return (
    <>
      <main>
        <nav className=" w-full drop-shadow-sm z-10 bg-[#0d0e11] backdrop-blur-sm left-0 md:bg-[#17191F] right-0 fixed top-0 flex justify-between p-4 items-center">
          <figure>
            <img
              src={logo}
              alt="logo"
              className="md:w-[189.19px] h-[30px] object-contain"
            />
          </figure>

          <div className="">
            <div
              className={`md:flex  ${
                toggle ? "block bmd" : "hidden"
              } md:relative md:top-0 absolute left-0 top-0  px-4   bg-[#0d0e11]   z-0     mt-3    right-0    top- md:bg-transparent  text-white md:font-light    font-inter`}
            >
              <ul className="md:flex md:space-x-[25px]   mb-8  md:text-white  text-[18px]  md:text-[18px]  m-auto justify-center  md:space-y-0 space-y-[15px]">
                <li className=" md:mt-0 md:hidden  ">
                  <div className="flex items-center justify-between">
                    <figure>
                      <img
                        src={logo}
                        alt="logo"
                        className="w-[160px] h-[30px] object-contain"
                      />
                    </figure>
                    <IoMdClose
                      size={25}
                      className="text-white font-bold"
                      onClick={handle}
                    />
                  </div>
                </li>
                <li className=" md:mt-0  cursor-pointer md:pl-2 md:pt-2  px-2 md:px-0  ">
                  Jobs
                </li>
                <li className=" md:mt-0  cursor-pointer    md:pl-2 md:pt-2  px-2 md:px-0  ">
                  Gigs
                </li>
                <li className="  md:mt-0  cursor-pointer  md:pl-2 md:pt-2 px-2 md:px-0   ">
                  Company
                </li>
                <li className=" md:mt-0   cursor-pointer   md:pl-2 md:pt-2  px-2 md:px-0  ">
                  <div
                    onClick={drop}
                    className="flex items-center  justify-between"
                  >
                    <p>About</p>
                    {dropdown ? (
                      <RiArrowDropUpLine
                        size={35}
                        className="animate-bounce "
                      />
                    ) : (
                      <RiArrowDropDownLine
                        size={35}
                        className="animate-bounce transition-all  "
                      />
                    )}
                  </div>
                </li>
                {/* menu drop down */}
                {dropdown && (
                  <div className="pl-7 md:pl-0 md:absolute md:pt-2 top-12 right-[1.2rem] rounded-lg md:bg-[#17191F] ">
                    <ul className="mt-[-10px]   ">
                      <li className="text-[#A34AE3] cursor-pointer">
                        About us
                      </li>
                      <li className="cursor-pointer">FAQ</li>
                      <li className="cursor-pointer ">Contact us</li>
                    </ul>
                  </div>
                )}
                <li className=" md:mt-0 md:hidden  ">
                  <Btn className="mt-6  cursor-pointer  hover:scale-75" />
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden" onClick={handle}>
            {<CiMenuFries size={25} className="text-white font-bold" />}
          </div>
          <div className="md:flex items-center gap-4 hidden">
            <div>
              <IoMdNotificationsOutline className="text-white  cursor-pointer " />
            </div>
            <Btn className="mt-0  cursor-pointer hover:scale-75" />
          </div>
        </nav>
      </main>
    </>
  );
}

export default Nav;
