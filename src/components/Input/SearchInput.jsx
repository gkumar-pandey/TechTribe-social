import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ value, onchange }) => {
  return (
    <div className=" dark:border-[color:var(--primary-color)] border-2  border-gray-600 bg-[color:var(--input-bg-color)] rounded w-3/4 m-auto flex flex-row items-center overflow-hidden  ">
      <SearchIcon sx={{ fontSize: "1.8rem", margin: "0.25rem" }} />
      <input
        placeholder="Search user..."
        value={value}
        onChange={onchange}
        className=" border-none bg-slate-50 focus:outline-none w-full text-xl  "
      />
    </div>
  );
};

export default SearchInput;
