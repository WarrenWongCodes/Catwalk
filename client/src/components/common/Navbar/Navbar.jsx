import React from "react";
import styles from "./navbar.module.css";
const { wrapper, navcontainer, icon, logo } = styles;
import { IoIosSearch as Search } from "react-icons/io";

const Navbar = () => {
  return (
    <header className={wrapper}>
      <div className={navcontainer}>
        <span className={logo}>Catshop</span>
        <Search className={icon} />
      </div>
    </header>
  );
};

export default Navbar;
