import React from "react";
import "./Navigation.css";
import logo from "./assets/logo.png";
import SecondaryNavigation from "../SecondaryNaviigation/SecondaryNavigation";

const Navigation = () => {
  const navItems = ["Home", "TV Shows", "Movies", "News & Popular", "My List"];

  return (
    <>
      <div className="navigation">
        <div className="mainNav">
          <img className="logo" src={logo} alt="" />
          <ul className="navigationList">
            {navItems.map((items) => {
              return (
                <li className="navigationItem" key={items}>
                  {items}
                </li>
              );
            })}
          </ul>
        </div>
        <SecondaryNavigation />
      </div>
    </>
  );
};

export default Navigation;
