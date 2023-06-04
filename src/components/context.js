import React, { createContext, useState, useReducer, useContext } from "react";
import { logicReducer } from "./logicReducer";
export const myContext = createContext();

const context = ({ children }) => {
  const [state, dispatch] = useReducer(logicReducer, {
    const ([value, setvalue] = useState(""))
  });

  return (
    <myContext.Provider value={(state, dispatch)}>
      {children}
    </myContext.Provider>
  );
};

export default context;
export const cartState = () => {
  useContext(myContext);
};
