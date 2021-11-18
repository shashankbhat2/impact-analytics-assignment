import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./layout.css";

const Layout = ({ children }) => {


  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <div>
            <NavLink to="/">
              <p className="brand">TalentBase</p>
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink className="navlink" activeclassname="active" to="/">
                All Candidates
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                activeclassname="active"
                to="/shortlisted"
              >
                {" "}
                Shortlisted
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                activeclassname="active"
                to="/rejected"
              >
                {" "}
                Rejected
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer className="footer"></footer>
    </React.Fragment>
  );
};

export default Layout;
