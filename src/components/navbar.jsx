import {
  faChevronDown,
  faGear,
  faLifeRing,
  faPlus,
  faRightToBracket,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleDropdown = () => (show ? setShow(false) : setShow(true));

  return (
    <div className="fixed top-0 bg-white w-full shadow py-3 transition-all float-right">
      <div className="flex items-center float-right">
        <button className="flex items-center leading-snug bg-bg-main text-white py-1 mobile-l:px-3 font-bold px-4 rounded-[4px] text-center">
          <FontAwesomeIcon
            icon={faPlus}
            className="text-lg mobile-l:text-base"
          />
          <span className="ml-2 text-xs leading-loose mobile-l:hidden	">
            New Vehicle
          </span>
        </button>

        <div className="ml-6 flex items-center">
          <div
            className="w-8 h-8 mobile-l:w-7 mobile-l:h-7 mobile-l:text-sm p-1 rounded-full bg-bg-main flex justify-center items-center cursor-pointer"
            onClick={handleDropdown}
          >
            <FontAwesomeIcon icon={faUserAlt} className="text-sm text-white" />
          </div>
          <div className="ml-3 mr-7 flex flex-col ">
            <span className="text-green-500 lg:hidden">Owner</span>
            <span
              className="text-black cursor-pointer lg:hidden"
              id="profile"
              onClick={handleDropdown}
            >
              MY Karaj
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-xs text-black ml-3 "
              />
            </span>

            <div
              id="dropdown"
              className="fixed py-2  w-[220px] border bg-white right-5 rounded-lg shadow-xl transition z-[9999]"
              style={{
                top: show ? "75px" : "-500px",
                transition: ".25s",
                opacity: show ? "1" : "0",
              }}
            >
              <div className="flex items-center pl-6 py-2 ">
                <div className="w-10 h-10 p-1 rounded-full bg-bg-main flex justify-center items-center">
                  <span className="text-base text-white">YM</span>
                </div>
                <div className="ml-3 mr-2 flex flex-col">
                  <span className="text-black font-semibold" id="profile">
                    MY Karaj
                  </span>
                  <span className=" text-gray-500">+201004632317</span>
                </div>
              </div>

              <div className=" border-b h-[1px] w-100 mt-3"></div>

              <ul className=" text-gray-600 capitalize font-semibold">
                <li className="my-5 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faGear} />
                    <span>account setting</span>
                  </a>
                </li>
                <li className="my-5 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faLifeRing} />
                    <span>help center</span>
                  </a>
                </li>

                <div className=" border-b h-[1px] w-100 mt-3"></div>
                <li className="mt-5 mb-3 pl-6">
                  <a href="/#" className="hover:text-bg-main transition-all">
                    <FontAwesomeIcon className="mr-2" icon={faRightToBracket} />
                    <span>sign out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
