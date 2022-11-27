import React from "react";
import Billboard from "../BillboardSetting/Billboard";
import Notification from "../Notification/Notification";
import Search from "../Search/Search";
import UserMenu from "../UserMenu/UserMenu";
import "./SecondaryNavigation.css";

const SecondaryNavigation = () => {
  return (
    <>
      <div className="box">
        <Search />
        <Notification />
        <UserMenu />
        <Billboard />

        {/* <Search/> */}
        {/* <Notification */}
        {/* useMenu */}
        {/* BillBoard setting */}
      </div>
    </>
  );
};

export default SecondaryNavigation;
