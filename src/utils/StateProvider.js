import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wraps the app and provides the datalayer to every component
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Allows components to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
