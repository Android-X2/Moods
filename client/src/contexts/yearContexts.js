import { createContext, useReducer } from "react";

export const YearContext = createContext();

export const yearReducer = (state, action) => {
  switch (action.type) {
    case "GET_YEAR":
      return {
        year: action.payload,
      };
    case "CREATE_YEAR":
      return {
        year: action.payload,
      };
    case "DELETE_YEAR":
      return {
        year: action.payload,
      };
    case "UPDATE_YEAR":
      return {
        year: { ...action.payload },
      };
    default:
      return state;
  }
};

export const YearContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(yearReducer, {
    year: null,
  });

  return (
    <YearContext.Provider value={{ ...state, dispatch }}>
      {children}
    </YearContext.Provider>
  );
};
