import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Btn from "../Props/Btn";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handle = () => {
    setToggle(!toggle);
  };

  const drop = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <main className="right-0 fixed z-10  bg-[#0d0e11] backdrop-blur-sm left-0 top-0 w-full flex justify-center items-center">
      <nav className="w-full max-w-[1200px] bg-[#0d0e11] flex justify-between px-4 items-center py-5">
        <figure>
          <NavLink onClick={handle} to={"home"}>
            <img
              src="/assets/Link.svg"
              alt="logo"
              className="md:w-[189.19px] object-contain"
            />
          </NavLink>
        </figure>

        <div>
          <div
            className={`md:flex ${
              toggle ? "block bmd" : "hidden"
            } md:relative md:top-0 absolute left-0 top-0 px-4 md:mt-0 mt-[4rem] bg-[#0d0e11] z-0 right-0 text-white md:font-light font-inter`}
          >
            <ul className="md:flex md:space-x-[25px] md:text-white text-[18px] md:text-[18px] m-auto justify-center md:space-y-0 space-y-[15px]">
              <li
                onClick={handle}
                className="md:mt-0 cursor-pointer md:pl-2 md:pt-2 px-2 md:px-0"
              >
                <NavLink to={"jobs"}>Jobs</NavLink>
              </li>
              <li
                onClick={handle}
                className="md:mt-0 cursor-pointer md:pl-2 md:pt-2 px-2 md:px-0"
              >
                <NavLink to={"gigs"}>Gigs</NavLink>
              </li>
              <li
                onClick={handle}
                className="md:mt-0 cursor-pointer md:pl-2 md:pt-2 px-2 md:px-0"
              >
                <NavLink to={"company"}>Company</NavLink>
              </li>
              <li className="md:mt-0 cursor-pointer md:pl-2 md:pt-2 px-2 md:px-0">
                <div
                  onClick={drop}
                  className="flex items-center justify-between"
                >
                  <p>About</p>
                  {dropdown ? (
                    <RiArrowDropUpLine size={35} className="animate-bounce" />
                  ) : (
                    <RiArrowDropDownLine
                      size={35}
                      className="animate-bounce transition-all"
                    />
                  )}
                </div>
              </li>
              {dropdown && (
                <div className="pl-7 md:pl-0 md:absolute md:pt-2 top-12 right-[1.2rem] rounded-lg md:bg-[#17191F]">
                  <ul className="mt-[-10px]">
                    <li
                      onClick={handle}
                      className="text-[#A34AE3] cursor-pointer"
                    >
                      <NavLink to={"about"}>About Us</NavLink>
                    </li>
                    <li onClick={handle} className="cursor-pointer">
                      <NavLink to={"faq"}>FAQ</NavLink>
                    </li>
                    <li onClick={handle} className="cursor-pointer">
                      <NavLink to={"contact"}>Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              )}
              <li className="md:mt-0 md:hidden">
                <Btn className="mt-6 cursor-pointer hover:scale-75" />
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden" onClick={handle}>
          {toggle ? (
            <IoMdClose size={25} className="text-white font-bold" />
          ) : (
            <CiMenuFries size={25} className="text-white font-bold" />
          )}
        </div>
        <div className="md:flex items-center gap-4 hidden">
          <div>
            <IoMdNotificationsOutline className="text-white cursor-pointer" />
          </div>
          <Btn className="mt-0 cursor-pointer hover:scale-75" />
        </div>
      </nav>
    </main>
  );
}

export default Nav;
