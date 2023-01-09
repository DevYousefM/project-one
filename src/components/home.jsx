import React, { useState } from "react";
import {
  faCheckCircle,
  faCreditCard,
  faDiagramProject,
  faFileInvoice,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css";
import { ProjectData, TaskData, MonthsData } from "../Data";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

export default function Home() {
  const [projectData, setProjectData] = useState({
    labels: ["Completed", "In Progress", "Booked In"],
    datasets: [
      {
        label: "Projects",
        data: ProjectData.map((data) => data.number),
        backgroundColor: [
          "rgb(15, 172, 129)",
          "rgb(255, 187, 0)",
          "rgb(232, 83, 71)",
          "rgba(0, 0, 0, 0.1)",
        ],
      },
    ],
  });
  const [taskData, setTaskData] = useState({
    labels: ["Completed", "In Progress", "Booked In"],
    datasets: [
      {
        label: "Projects",
        data: TaskData.map((data) => data.number),
        backgroundColor: [
          "rgb(15, 172, 129)",
          "rgb(255, 187, 0)",
          "rgb(232, 83, 71)",
          "rgba(0, 0, 0, 0.1)",
        ],
      },
    ],
  });
  const [monthsData, setMonthsData] = useState({
    labels: MonthsData.map((data) => data.month),
    datasets: [
      {
        label: "Payments",
        data: MonthsData.map((data) => data.number),
        borderColor: "rgb(15, 172, 129)",
      },
    ],
  });
  return (
    <div className="w-full pt-14">
      <div className="flex justify-between items-center mb-10">
        <h2 className=" capitalize text-gray-600 text-2xl md:text-xl mobile-l:text-lg font-semibold">
          overview
        </h2>
        <div className="flex">
          <button className="flex items-center leading-snug mr-2 bg-slate-200 text-bg-main py-1 mobile-l:py-[2px] font-bold px-4 mobile-l:px-3 rounded-[4px] text-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-lg mobile-l:text-base"
            />
            <span className="ml-2 text-xs mobile-l:text-[10px] leading-loose	">
              Clients
            </span>
          </button>
          <button className="flex items-center leading-snug bg-bg-main text-white py-1 mobile-l:px-3 mobile-l:py-[2px] font-bold px-4 rounded-[4px] text-center">
            <FontAwesomeIcon
              icon={faDiagramProject}
              className="text-lg mobile-l:text-base"
            />
            <span className="ml-2 text-xs mobile-l:text-[10px] leading-loose	">
              Projects
            </span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap">
        <div className="w-1/2 flex mobile-l:w-full justify-between flex-wrap">
          <div className="homecard">
            <h3>
              Unpaid Invoices
              <sup className="text-gray-500 text-base ml-1">KSh</sup>
            </h3>
            <strong>885,789.50</strong>
            <span className="text-red-500">
              <FontAwesomeIcon icon={faCreditCard} className="mr-1" />
              <label>KSh886,189.50</label>
            </span>
            <label>Overdue</label>
          </div>

          <div className="homecard">
            <h3>Active Projects</h3>
            <strong>446</strong>
            <span className=" text-green-500">
              <FontAwesomeIcon icon={faDiagramProject} className="mr-1" />
              <label>32</label>
            </span>
          </div>

          <div className="homecard">
            <h3>Pending Tasks</h3>
            <strong>124</strong>
            <span className="text-green-500">
              <FontAwesomeIcon icon={faFileInvoice} className="mr-1" />
              <label>81</label>
              <label className="ml-2 text-gray-500">Completed</label>
            </span>
          </div>

          <div className="homecard">
            <h3>
              Income Jan
              <sup className="text-gray-500 text-base ml-1">KSh</sup>
            </h3>
            <strong>46,514.54</strong>
            <span className="text-green-500">
              <FontAwesomeIcon icon={faCreditCard} className="mr-1" />
              <label>13</label>
              <label className="ml-2 text-gray-500">Payments</label>
            </span>
          </div>
        </div>

        <div className="w-1/2 mobile-l:w-full flex justify-between flex-wrap">
          <div className="homelarge ml-6 mobile-l:ml-0">
            <h3>Project Statistics</h3>
            <div className="h-[265px] w-full flex justify-center">
              <PieChart chartData={projectData} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-5">
        <div className="w-1/2 mobile-l:w-full flex justify-between flex-wrap">
          <div className="homelarge mr-6 mobile-l:mr-0">
            <h3>Project Statistics</h3>
            <div className="h-[265px] w-full flex justify-center">
              <PieChart chartData={taskData} />
            </div>
          </div>
        </div>

        <div className="w-1/2 mobile-l:w-full flex justify-between flex-wrap">
          <div className="homecard">
            <h3>
              Income 2023
              <sup className="text-gray-500 text-base ml-1">KSh</sup>
            </h3>
            <strong>10,500.00</strong>
            <span>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-1 text-green-500"
              />
              <label className="text-gray-500"> Payments this year</label>
            </span>
          </div>

          <div className="homecard">
            <h3>Profits 2023</h3>
            <strong>-2.95</strong>
            <span>
              <FontAwesomeIcon
                className="text-green-500 mr-1"
                icon={faCheckCircle}
              />
              <label className="text-gray-500"> Income minus </label>
            </span>
            <label className="text-gray-500">expenses</label>
          </div>

          <div className="homecard">
            <h3>Total Clients</h3>
            <strong>184</strong>
            <span className="text-green-500">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              <label className="ml-2 text-gray-500"> Active clients</label>
            </span>
          </div>

          <div className="homecard">
            <h3>
              Total Staff
              <sup className="text-gray-500 text-base ml-1">KSh</sup>
            </h3>
            <strong>25</strong>
            <span className="text-green-500">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              <label className="text-gray-500">Active & Inactive Staff</label>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-5">
        <div className="w-full flex justify-between flex-wrap">
          <div className="homelarge mr-6">
            <h3>Payments last 12 months</h3>
            <div className=" flex justify-center">
              <LineChart chartData={monthsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
