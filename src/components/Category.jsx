import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";
const Category = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/video" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </Routes>
    </div>
  );
};

export default Category;
