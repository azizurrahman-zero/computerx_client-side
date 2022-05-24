import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile lg:w-11/12 mx-auto lg:px-10 px-5 py-5">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col relative pt-4 pl-3">
        <Outlet />
        <label
          htmlFor="drawer"
          className="btn drawer-button btn-ghost lg:hidden absolute top-3 left-2 text-3xl"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content bg-inherit">
          <li>
            <Link className="font-semibold" to="/dashboard">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="font-semibold" to="/dashboard">
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
