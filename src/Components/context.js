import React from "react";

export const appCtx = React.createContext("app provider");
export const AppProvider = appCtx.Provider;

export const crpCtx = React.createContext("crp provider");
export const CrpProvider = crpCtx.Provider;
