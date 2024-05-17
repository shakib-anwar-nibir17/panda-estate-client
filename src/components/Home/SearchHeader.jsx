import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div className="relative rounded-md shadow-sm lg:w-[400px] sm:w-[300px] w-full ">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none text-custom-main"
          placeholder="title, property, or Location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="inline-flex items-center justify-center  sm:w-auto w-full rounded-md text-sm font-medium  disabled:opacity-50 hover:bg-custom-red-500 h-10 px-4 py-2 bg-black text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
