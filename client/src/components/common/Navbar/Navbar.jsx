import React from "react";
import styles from "./navbar.module.css";
import Theme from "./Theme/Theme.jsx";
const { wrapper, container, icon, logo } = styles;
import { IoIosSearch as Search } from "react-icons/io";

const Navbar = () => {
  return (
    <header className={wrapper}>
      <div className={`container ${container}`}>
        <Theme />
        <span className={logo}>Catshop</span>
        <Search className={icon} />
      </div>
    </header>
  );
};

export default Navbar;
