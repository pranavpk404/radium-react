import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ResultContextProvider>
      <Router>
        <div className={darkTheme ? "dark" : ""}>
          <div className="overflow-hidden bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-50">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Category />
            <Footer />
          </div>
        </div>
      </Router>
    </ResultContextProvider>
  );
};

export default App;
