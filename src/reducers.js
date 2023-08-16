import {
  CHANGE_SEARCH_FIELD,
  ROBOTS_FAILED,
  ROBOTS_PENDING,
  ROBOTS_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialRobotState = {
  robots: [],
  isPending: true,
};

export const fetchRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case ROBOTS_PENDING:
      return { ...state, isPending: true };
    case ROBOTS_SUCCESSFUL:
      return { ...state, robots: action.payload, isPending: false };
    case ROBOTS_FAILED:
      return { ...state, error: action.error, isPending: false };
    default:
      return state;
  }
};
