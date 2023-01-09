import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDiagramProject,
  faEllipsis,
  faFileInvoice,
  faFileText,
  faMoneyBill,
  faNoteSticky,
  faVcard,
} from "@fortawesome/free-solid-svg-icons";
import "../css/clientDetails.css";
import ClientDetails from "./clientDetails";
export default function ClientProfile() {
  return (
    <div className="w-full details pt-16 ">
      <div className="flex md:flex-row justify-between items-center mb-10">
        <div>
          <h2 className=" capitalize text-gray-600 text-2xl md:text-lg font-semibold">
            Clients /{" "}
            <mark className=" text-bg-main bg-transparent text-xl md:text-base font-normal ">
              MYKARAJ
            </mark>
          </h2>
          <div className="flex md:flex-col">
            <p className="text-gray-500 mt-3 mr-9 md:mr-4">
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
            <span className="ml-4 leading-loose capitalize	mobile-l:hidden ">
              Back
            </span>
          </a>
          <button className="flex items-center bg-white-bg hover:text-white-bg hover:bg-color-main border border-color-main text-color-main font-semibold px-4 rounded-[4px] text-center">
            <FontAwesomeIcon icon={faEllipsis} className="text-lg " />
            <span className="ml-4 leading-loose capitalize">More</span>
          </button>
        </div>
      </div>
      <div className=" w-full bg-white rounded-sm">
        <ul className="w-full border-b-[2px] px-7 flex">
          <a
            href="/clients/profile"
            className=" px-4 text-center text-color-main font-semibold py-4 w-fit activeNav ml-0"
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
            className=" px-4 text-color-main font-semibold py-4 w-fit ml-0"
          >
            <FontAwesomeIcon icon={faVcard} className="mr-3 md:mr-0 " />
            <label className="md:hidden cursor-pointer">Payments </label>
          </a>
        </ul>
        <ClientDetails />
      </div>
    </div>
  );
}
