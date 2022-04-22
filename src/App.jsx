import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  );
  return (
    <ResultContextProvider>
      <Router>
        <div className={darkTheme ? "dark" : ""}>
          <div className="font-Poppins overflow-hidden bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-50">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Category />
          </div>
        </div>
      </Router>
    </ResultContextProvider>
  );
};

export default App;
