import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout.jsx";
import "./App.css";
import Shortlisted from "./components/Shortlisted";
import Rejected from "./components/Rejected";
import Candidate from "./components/Candidate";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shortlisted" element={<Shortlisted />}></Route>
        <Route path="/rejected" element={<Rejected />}></Route>
        <Route path="/candidate/:id" element={<Candidate />}></Route>
        <Route element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
