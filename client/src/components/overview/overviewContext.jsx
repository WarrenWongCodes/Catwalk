import React, { createContext } from "react";

export const initialState = {
  currentStyle: {},
};

export const OverviewContext = createContext(initialState);
