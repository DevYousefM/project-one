import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsis,
  faFileInvoice,
  faNoteSticky,
  faDiagramProject,
  faFileText,
  faMoneyBill,
  faVcard,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
export default function Payments() {
  const [clientList, setClientList] = useState(false);
  const handleClientList = () =>
    clientList ? setClientList(false) : setClientList(true);

  return (
    <div className="w-full invoices pt-16">
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
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
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
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0 activeNav"
          >
            <FontAwesomeIcon icon={faVcard} className="mr-3 md:mr-0 " />
            <label className="md:hidden cursor-pointer">Payments </label>
          </a>
        </ul>
        {/*  */}
        <div className="w-full p-6">
          <div className="w-full flex justify-between">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className=" capitalize text-gray-600 text-2xl font-semibold">
                  Client Invoices
                </h2>
                <p className="text-gray-500 mt-3">
                  A list of invoices for Abdur Rahman.
                </p>
              </div>
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
          <div className=" w-full bg-white">
            <div className="flex justify-between">
              <input
                type="text"
                className=" placeholder:text-slate-300 text-[13px] font-normal w-40 border placeholder:font-medium rounded px-4 py-[6px] outline-none focus:border-bg-main  "
                placeholder="Type in to search"
              />
              <div className="flex items-center">
                <label className="text-gray-500 mobile-l:hidden mr-3">Show</label>
                <div className="dropdown ">
                  <select className=" border rounded focus:border-bg-main font-normal text-gray-700 focus:outline-none pr-[50px] py-[5px] pl-[10px] text-[13px] appearance-none text-center">
                    <option value="10" selected>
                      10
                    </option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border rounded mt-4 overflow-x-scroll w-full">
              <table className="w-full">
                <thead className=" border-b">
                  <tr className="w-full">
                    <th
                      className=" min-w-[4rem]"
                      id="hash"
                      style={{ textAlign: "center" }}
                    >
                      #
                    </th>
                    <th className="client-th min-w-[11rem]">Project</th>
                    <th className="client-th min-w-[12rem]">Registration</th>
                    <th className="client-th min-w-[10rem]">Items</th>
                    <th className="client-th min-w-[9rem] ">Date</th>
                    <th className="client-th min-w-[10rem]">Total</th>
                    <th className="min-w-[4rem]"></th>
                  </tr>
                </thead>
              </table>
              <p className="mb-3 w-full text-center text-gray-400">
                It's empty here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
