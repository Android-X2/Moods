import { YearContext } from "../contexts/yearContexts";
import { useContext } from "react";

export const useYearContext = () => {
  const context = useContext(YearContext)

  if(!context){
    throw Error('useYearContext must be used inside a YearContextProvider')
  }
  return context
}