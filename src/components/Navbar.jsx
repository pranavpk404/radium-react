import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="p-5 flex flex-wrap sm:justify-between justify-center items-center ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl rounded-md bg-slate-200 p-1 text-black dark:text-white dark:bg-slate-600">
            Radon
          </p>
        </Link>
        <button
          className="text-xl  bg-white rounded-full p-2
           hover:shadow-lg hover:shadow-slate-900
           dark:bg-gray-700  dark:hover:shadow-slate-50"
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          {darkTheme ? "💡" : "🌙"}
        </button>
      </div>
      <Searchbox />
    </nav>
  );
};

export default Navbar;
