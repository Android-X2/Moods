import { useAuthContext } from "./useAuthContext";
import { useYearContext } from "./useYearContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: yearDispatch } = useYearContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    yearDispatch({ type: "GET_YEAR", payload: null });
  };
  return { logout };
};
