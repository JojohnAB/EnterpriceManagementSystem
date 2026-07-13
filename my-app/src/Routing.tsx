import { Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./Frontend";
import Cloud from "./Cloud";
import Project from "./Project";
import Login from "./Login";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/frontend" />} />

      <Route path="/frontend" element={<Frontend />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/project" element={<Project />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routing;