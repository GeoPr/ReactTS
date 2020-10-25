import React, { createContext, useContext, useReducer } from 'react';
import { appReducer, app_IS } from './reducers/appReducer';

const Context = createContext();

export const StateProvider = ({ children }) => {
  const value = {
    reducers: {
      app: useReducer(appReducer, app_IS),
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextValue = () => useContext(Context);
