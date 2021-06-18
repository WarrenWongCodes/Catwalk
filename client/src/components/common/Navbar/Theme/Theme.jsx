import React, { useState } from "react";
import style from "./theme.module.css";
const { themeContainer } = style;
import globalVar from "../../../../styles/variables/colors.css";
import { BsToggleOff as Off, BsToggleOn as On } from "react-icons/bs";

const Theme = () => {
  const [theme, setTheme] = useState(true);
  if (!theme) {
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--font-color", "#fcf6ed");
    document.documentElement.style.setProperty("--border-color", "#F6E5CB");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#f9f9f9");
    document.documentElement.style.setProperty("--font-color", "#130d03");
    document.documentElement.style.setProperty("--border-color", "#c7c7c4");
  }
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={themeContainer}
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme ? <Off /> : <On />}
    </div>
  );
};

export default Theme;
