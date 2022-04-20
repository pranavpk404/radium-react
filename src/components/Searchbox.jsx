import { useState, useEffect } from "react";

import Links from "./Links";
import { useResultContext } from "../contexts/ResultContextProvider";

const Searchbox = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");

  useEffect(() => {
    document
      .getElementById("searchBar")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          const searchInput = document.getElementById("searchBar").value;
          setSearchTerm(searchInput);
        }
      });
  }, []);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        id="searchBar"
        className="sm:w-96 w-80 h-10 dark:bg-gray-700 dark:text-white rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Radon or type URL"
        onChange={(e) => setText(e.target.value)}
      />

      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Searchbox;
