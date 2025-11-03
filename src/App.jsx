import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Path from "./components/Learning-Page/Path";
import AllCourses from "./components/AllCourses-Page/AllCourses";
import Login from "./components/Login-Page/Login";
import Page from "./components/Hero-Page/Page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/path" element={<Path />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;