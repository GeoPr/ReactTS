import React, { createContext, useContext, useReducer } from 'react';
import { appReducer, app_IS, app_TYPE } from './reducers/appReducer';

interface IContextProps {
  state: Array<app_TYPE>;
  dispatch: ({ type, payload }: { type: string; payload: object }) => any;
}

const Context = createContext({} as IContextProps);

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, app_IS);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextValue = () => useContext(Context);
