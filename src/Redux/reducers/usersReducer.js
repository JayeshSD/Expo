import { FETCH_USERS, HIDE_USER, SHOW_USER } from "../actions/types";

const initialState = {
  users: [],
  showUserDetails: false,
  userDetails: {},
  loading: true,
  numberOfUsers: 100,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SHOW_USER:
      return {
        ...state,
        userDetails: action.payload,
        showUserDetails: true,
      };
    case HIDE_USER:
      return {
        ...state,
        userDetails: {},
        showUserDetails: false,
      };

    default:
      return state;
  }
}
