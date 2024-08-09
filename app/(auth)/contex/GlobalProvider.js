import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContex();

export const useGlobalConstext = () => useContext(GlobalContext);