import API from "../../Components/utils/API";
import { FETCH_USERS, HIDE_USER, SHOW_USER } from "./types";

export const fetchUsers = () => async (dispatch) => {
  const usersData = await API.get("/", {
    params: {
      results: 100,
    },
  });
  dispatch({ type: FETCH_USERS, payload: usersData.data.results });
};

export const showUser = (user) => {
  return {
    type: SHOW_USER,
    payload: user,
  };
};

export const hideUser = () => {
  return {
    type: HIDE_USER,
  };
};
