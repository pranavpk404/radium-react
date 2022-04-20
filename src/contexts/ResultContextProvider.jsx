import { useContext, useState, createContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "cc5f65bb61mshbf8e792e8aa607fp148ec8jsnc39b381f4869",
      },
    };
    const url = `${baseUrl}${type}`;
    const response = await fetch(url, options);
    const data = await response.json();
    if (type.includes("news")) {
      setResults(data.entries);
    } else {
      setResults(data);
    }
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, getResults, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
