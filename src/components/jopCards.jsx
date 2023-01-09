import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsis,
  faFileInvoice,
  faNoteSticky,
  faPlus,
  faDiagramProject,
  faFileText,
  faMoneyBill,
  faVcard,
} from "@fortawesome/free-solid-svg-icons";

export default function JopCards() {
  const [clientList, setClientList] = useState(false);
  const handleClientList = () =>
    clientList ? setClientList(false) : setClientList(true);

  return (
    <div className="w-full jopcards pt-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className=" capitalize text-gray-600 text-2xl font-semibold">
            Clients /{" "}
            <mark className=" text-bg-main bg-transparent text-xl font-normal ">
              MYKARAJ
            </mark>
          </h2>
          <div className="flex">
            <p className="text-gray-500 mt-3 mr-9">
              Client ID:{" "}
              <mark className=" bg-transparent text-gray-600 font-semibold">
                AC0459
              </mark>
            </p>
            <p className="text-gray-500 mt-3">
              Created On:{" "}
              <mark className=" bg-transparent text-gray-600 font-semibold">
                January 4, 2023 12:12am
              </mark>
            </p>
          </div>
        </div>
        <div className="flex">
        <a
            href="/clients"
            className="flex mr-5 items-center hover:text-black bg-white border text-gray-600 font-semibold px-4 rounded-[4px] text-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
            <span className="ml-4 leading-loose capitalize	">Back</span>
          </a>
          <button className="flex items-center bg-white-bg hover:text-white-bg hover:bg-color-main border border-color-main text-color-main font-semibold px-4 rounded-[4px] text-center">
            <FontAwesomeIcon icon={faEllipsis} className="text-lg" />
            <span className="ml-4 leading-loose capitalize	">More</span>
          </button>
        </div>
      </div>
      <div className=" w-full bg-white rounded-sm">
      <ul className="w-full border-b-[2px] px-7 flex">
          <a
            href="/clients/profile"
            className=" px-4 text-center text-color-main font-semibold py-4 w-fit  ml-0"
          >
            <FontAwesomeIcon icon={faFileInvoice} className="mr-3 md:mr-0" />
            <label className="md:hidden cursor-pointer">Details</label>
          </a>
          <a
            href="/clients/profile/projects"
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
          >
            <FontAwesomeIcon icon={faDiagramProject} className="mr-3 md:mr-0" />
            <label className="md:hidden cursor-pointer">Projects</label>
          </a>

          <a
            href="/clients/profile/jopcards"
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0 activeNav"
          >
            <FontAwesomeIcon icon={faNoteSticky} className="mr-3 md:mr-0" />
            <label className="md:hidden cursor-pointer">Jop Cards</label>
          </a>

          <a
            href="/clients/profile/invoices"
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
          >
            <FontAwesomeIcon icon={faMoneyBill} className="mr-3 md:mr-0" />
            <label className="md:hidden cursor-pointer">Invoices </label>
          </a>
          <a
            href="/clients/profile"
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
          >
            <FontAwesomeIcon icon={faFileText} className="mr-3 md:mr-0" />
            <label className="md:hidden cursor-pointer">Quotes </label>
          </a>

          <a
            href="/clients/profile/payments"
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
          >
            <FontAwesomeIcon icon={faVcard} className="mr-3 md:mr-0 " />
            <label className="md:hidden cursor-pointer">Payments </label>
          </a>
        </ul>
        {/*  */}
        <div className="w-full p-6">
          <div className="flex justify-between">
            <div>
              <h2 className=" capitalize text-gray-600 text-xl font-semibold">
                Project Job Cards
              </h2>
              <p className="text-gray-500 text-sm mt-3">
                A list of job cards for Abdur Rahman projects.
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex items-center leading-snug bg-bg-main text-white py-1 font-semibold px-4 rounded-[4px] text-center">
                <FontAwesomeIcon icon={faPlus} className="text-lg" />
                <span className="ml-2 leading-loose capitalize	">
                  Create Jop Card
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-5 pb-5 border-b ">
            <div className="w-full bg-gray-100 p-6 flex flex-col justify-between">
              <div className="w-full pb-5 border-b">
                <div>
                  <div className="status float-right pl-8 text-green-500 bg-green-100 before:bg-green-500">
                    Approved
                  </div>
                </div>
                <div>
                  <h2 className=" capitalize text-gray-600 text-xl font-semibold">
                    Body Report
                  </h2>
                  <p className="text-gray-500 text-sm mt-3">["fix door"]</p>
                </div>
              </div>
              <div className="w-full py-5 border-b">
                <div>
                  <h2 className=" capitalize text-gray-600 text-xl font-semibold">
                    Body Report
                  </h2>
                  <p className="text-gray-500 text-sm mt-3">["fix door"]</p>
                </div>
              </div>
            </div>
            <div className="pt-3 text-xs text-gray-400 flex w-full">
              Job Card #483 Created on December 11, 2022 at 05:55pm
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • Edit Job Card
              </a>
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • View Job Card
              </a>
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • Download Job Card
              </a>
              <a href="/#" className="ml-2 text-red-400 cursor-pointer">
                • Delete
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-5 border-b pb-5 ">
            <div className="w-full bg-gray-100 p-6 flex flex-col justify-between">
              <div className="w-full pb-5 border-b">
                <div>
                  <div className="status float-right pl-8 text-yellow-500 bg-yellow-100 before:bg-yellow-500">
                    Assessment
                  </div>
                </div>
                <div>
                  <h2 className=" capitalize text-gray-600 text-xl font-semibold">
                    Body Report
                  </h2>
                  <p className="text-gray-500 text-sm mt-3">["fix door"]</p>
                </div>
              </div>
              <div className="w-full py-5 border-b">
                <div>
                  <h2 className=" capitalize text-gray-600 text-xl font-semibold">
                    Mechanical Report
                  </h2>
                  <p className="text-gray-500 text-sm mt-3">["fix door"]</p>
                </div>
              </div>
            </div>
            <div className="pt-3 text-xs text-gray-400 flex w-full">
              Job Card #483 Created on December 11, 2022 at 05:55pm
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • Edit Job Card
              </a>
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • Create Approved Version
              </a>
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • View Job Card
              </a>
              <a href="/#" className="ml-2 text-color-main cursor-pointer">
                • Download Job Card
              </a>
              <a href="/#" className="ml-2 text-red-400 cursor-pointer">
                • Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
