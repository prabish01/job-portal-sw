/* eslint-disable no-unused-vars */
// import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { HiLocationMarker, HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";

// Sample job data
const Data = [
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Graphic Designer",
    jobType: "Remote",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Malta",
    time: "10 days ago",
    company: "",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  {
    id: 1,
    title: "Dev-Ops",
    jobType: "Full-Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facilis nulla necessitatibus?",
    location: "Dubai",
    time: "2 days ago",
    company: "Atkans",
  },
  // Add more job objects to the Data array if needed
];

const Jobs = () => {
  return (
    <div className="jobsType-Container flex flex-wrap gap-50 justify-evenly items-center rounded-[10px] py-10 mt-10">
      {Data.map(({ id, title, jobType, description, location, time, company }) => (
        <div key={id} className="jobType-container-child mb-10 p-5 w-[30%] bg-slate-100 group group/item  hover:bg-blue-500 hover:text-white shadow-lg shadow-greyIsh-400/700 hover:shadow-lg rounded-[10px]">
          <div className="jobtype-container">
            <div className="jobType-container-child-content">
              <h3 className="jobcard text-center text-xl font-semibold text-gray-700 mb-4">{title}</h3>
              <div className="jobType-container-child-content-deadline mb-4 flex justify-center items-center gap-3">
                <GiSandsOfTime /> {time}
              </div>
              <div className="divider border-t border-gray-300 mb-3"></div>
              <div className="jobcard-decription mb-5">{description}</div>
              <div className="jobtype_desc flex items-center gap-3 text-gray-500">
                <BiTimeFive /> {jobType}
              </div>
              <div className="jobtype_desc-location flex items-center gap-3 text-gray-500">
                <HiLocationMarker /> {location}
              </div>
              <div className="jobtype_desc-company flex items-center gap-3 text-gray-500">
                <HiOutlineOfficeBuilding /> {company}
              </div>
            </div>
          </div>
          <button className="applyButton mt-3 rounded-[10px] bg-sky-600 w-[100%] text-white font-semibold text-[14px] p-[10px] ">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
