import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/todo/" element={<Home />} />
          <Route path="/todo/profile" element={<Profile />} />
          <Route path="/todo/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
