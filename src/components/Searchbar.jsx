import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Searchbar = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center gap-x-3 bg-white ring-1 ring-slate-900/10 rounded-lg px-4 py-3 max-w-md">
      <MdOutlineSearch className="text-xl" />
      <input
        type="text"
        placeholder="Search by product name, location..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
};

export default Searchbar;
