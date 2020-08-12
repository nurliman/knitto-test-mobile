import React, { createContext, useReducer, Dispatch } from "react";

import { IAppState, KaryawanActionsTypes } from "../constants/types";
import rootReducer from "./reducers";

const initialState: IAppState = {
  karyawan: {
    data: [],
    filter: {
      start: new Date("2020/8/1"),
      end: new Date(),
    },
  },
};

const AppContext = createContext<{
  state: IAppState;
  dispatch: Dispatch<KaryawanActionsTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
