import React, { useState, useRef } from "react";
import "../css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faChartSimple,
  faChevronDown,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => (showNav ? setShowNav(false) : setShowNav(true));
  const [showProjectMenu, setProjectMenu] = useState(false);
  const handleProjectMenu = () =>
    showProjectMenu ? setProjectMenu(false) : setProjectMenu(true);
  const [showInventoryMenu, setInventoryMenu] = useState(false);
  const handleInventoryMenu = () =>
    showInventoryMenu ? setInventoryMenu(false) : setInventoryMenu(true);

  return (
    <div
      id="sidebar"
      className={` overflow-y-scroll overflow-x-hidden w-[20%] lg:w-[14rem] fixed left-0 transition-all bg-white z-[99] h-full border-r px-5 pt-5 ${
        showNav ? "left-0" : "lg:left-[-14rem]"
      }`}
    >
      <div className=" w-full flex items-center">
        <img src="/IMG_1200.png" className=" w-[60%] mb-8" alt="logo" />
        <FontAwesomeIcon
          onClick={handleNav}
          icon={faArrowLeft}
          className={`top-9 transition-all fixed z-[999] -translate-y-2/4 text-2xl ${
            showNav ? "lg:left-[11rem]" : "lg:left-[-11rem]"
          } cursor-pointer hidden lg:block`}
        />
      </div>

      <div
        style={{ opacity: showNav ? 0 : 1, zIndex: showNav ? -99 : 1 }}
        className="fixed top-7 w-[12%] mobile-l:w-[25%] transition-opacity -translate-y-2/4 text-2xl left-[4.5rem] cursor-pointer hidden lg:block"
      >
        <img src="/IMG_1200.png" className=" w-[100%]" alt="logo" />
      </div>

      <FontAwesomeIcon
        icon={faBars}
        onClick={handleNav}
        className=" z-[0] fixed top-7 transition-opacity -translate-y-2/4 mobile-l:text-xl text-2xl left-8 cursor-pointer hidden lg:block"
        style={{ opacity: showNav ? 0 : 1, zIndex: showNav ? -99 : 1 }}
      />
      <div className="w-full items-center mb-3">
        <label className=" uppercase font-base text-slate-500 text-sm tracking-wider">
          overview
        </label>
      </div>
      <a
        href="/"
        className="
        flex w-full items-center px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
      >
        <FontAwesomeIcon
          icon={faChartSimple}
          className=" text-xl mr-2 cursor-pointer"
        />
        <label className=" capitalize font-semibold  text-sm tracking-wider cursor-pointer">
          overview
        </label>
      </a>

      <div className="w-full items-center mb-3 mt-8">
        <label className=" uppercase font-base text-slate-500 text-sm tracking-wider">
          application
        </label>
      </div>
      <a
        href="/#"
        className="
        flex w-full items-center px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
      >
        <FontAwesomeIcon
          icon={faUsers}
          className=" text-xl mr-2 cursor-pointer"
        />
        <label className=" capitalize font-semibold  text-sm tracking-wider cursor-pointer">
          <a href="/clients">clients</a>
        </label>
      </a>

      <div
        className="
        flex w-full items-center justify-between pl-4 mt-5 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        onClick={handleProjectMenu}
      >
        <div>
          <FontAwesomeIcon
            icon={faChartSimple}
            className=" text-xl mr-2 cursor-pointer"
          />
          <label className=" capitalize font-semibold  text-sm tracking-wider cursor-pointer">
            Projects
          </label>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={` text-sm mr-4 cursor-pointer transition-transform ${
            showProjectMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={` h-[0] ${
          showProjectMenu ? "h-[205px]" : "h-[0]"
        } overflow-hidden transition-all`}
      >
        <a
          href="/projects"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Projects / Vehicle
          </label>
        </a>
        <a
          href="/pendingtasks"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Pending Tasks
          </label>
        </a>
        <a
          href="/expected-parts"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Expected Parts
          </label>
        </a>
        <a
          href="/unpaid-parts"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Unpaid Parts
          </label>
        </a>
      </div>
      <div
        className="
        flex w-full items-center justify-between pl-4 mt-5 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        onClick={handleInventoryMenu}
      >
        <div>
          <FontAwesomeIcon
            icon={faChartSimple}
            className=" text-xl mr-2 cursor-pointer"
          />
          <label className=" capitalize font-semibold  text-sm tracking-wider cursor-pointer">
            Inventory
          </label>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={` text-sm mr-4 cursor-pointer transition-transform ${
            showInventoryMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={` h-[0] ${
          showInventoryMenu ? "h-[205px]" : "h-[0]"
        } overflow-hidden transition-all`}
      >
        <a
          href="/inventory-list"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Inventory List
          </label>
        </a>
        <a
          href="/recieveables"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Receiveables
          </label>
        </a>
        <a
          href="/issueables"
          className="
        flex w-full items-center mt-4 px-4 py-2 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
        >
          <label className=" capitalize font-semibold text-xs tracking-wider cursor-pointer">
            Issueables
          </label>
        </a>
      </div>

      <div className="w-full items-center mb-3 mt-3">
        <label className=" uppercase font-base text-slate-500 text-sm tracking-wider">
          management
        </label>
      </div>
      <a
        href="/team"
        className="
        flex w-full items-center px-4 py-2 mb-5 mr-5 border text-slate-500 hover:text-color-main hover:bg-gray-100 cursor-pointer
        rounded-lg transition-all
        "
      >
        <FontAwesomeIcon
          icon={faUserFriends}
          className=" text-xl mr-2 cursor-pointer"
        />
        <label className=" capitalize font-semibold  text-sm tracking-wider cursor-pointer">
          Team Members
        </label>
      </a>
    </div>
  );
}
