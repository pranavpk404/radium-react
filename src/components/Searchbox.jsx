import { useState, useEffect } from "react";

import Links from "./Links";
import { useResultContext } from "../contexts/ResultContextProvider";

const Searchbox = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");

  const search = () => {
    const searchInput = document.getElementById("searchBar").value;
    setSearchTerm(searchInput);
  };

  useEffect(() => {
    document
      .getElementById("searchBar")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          search();
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
        placeholder="Search radium or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <button onClick={search} className="-m-11">
          🔎
        </button>
      )}
      <Links />
    </div>
  );
};

export default Searchbox;
