// // /* eslint-disable no-unused-vars */
// import React from "react";

// to import icons
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export const Search = () => {
  return (
    <div className="searchDiv grid gap-5 bg-gray-100 rounded-[20px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center gap-10 p-5 shadow-md shadow-greyIsh-700 bg-white rounded-[15px]">
          <div className="secondDiv flex justify-between items-center gap-0">
            <BiSearchAlt className="searchIcon text-[20px] icon" />
            <input type="text" className="searchTextBox bg-transparent text-gray-400 focus:outline-none w-[50%]" placeholder="Search Jobs...." />
            <AiOutlineCloseCircle className="crossIcon icon text-[20px] text-slate-400 hover:text-slate-700" />
          </div>

          <div className="secondDiv flex justify-between items-center gap-0">
            <HiLocationMarker className="searchIcon  text-gray-400 text-[20px] icon" />
            <input type="text" className="searchTextBox bg-transparent text-gray-400 focus:outline-none w-[50%]" placeholder="Search By Location...." />
            <AiOutlineCloseCircle className="crossIcon icon text-[20px] text-slate-400 hover:text-slate-700" />
          </div>

          <button className="searchBtn bg-slate-300 h-full p-2 rounded-[15px] text-white w-[20%] cursor-pointer hover:bg-sky-600">Search</button>
        </div>
      </form>
      <div className="searchDiv-child-below flex justify-evenly  text-slate-500">
        <div className="searchDiv-child-below-sortBy font-light text-slate-500 bg-transparent gap-2 ">
          <label htmlFor="level" className="sortBy gap-2">
            Sort By:
          </label>
          <select name="" id="level" className="sortBy-select rounded-[10px] px-4  py-1 ml-3">
            <option value="">Alphabetical</option>
            <option value="">Popularity</option>
            <option value="">Date Posted</option>
            <option value="">Job Type</option>
            <option value="">random</option>
            <option value="">random</option>
          </select>
        </div>
        <div className="searchDiv-child-below-sortBy font-light text-slate-500 bg-transparent gap-2 ">
          <label htmlFor="level" className="sortBy gap-2">
            Type:
          </label>
          <select name="" id="level" className="sortBy-select rounded-[10px] px-4  py-1 ml-3">
            <option value="">Full-Time</option>
            <option value="">Part Time</option>
            <option value="">Internship</option>
            <option value="">Remote Job</option>
            <option value="">Contract</option>
          </select>
        </div>
        <span className="clearBtn text-slate-500 hover:text-black cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};
export default Search;
