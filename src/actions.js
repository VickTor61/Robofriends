import {
  CHANGE_SEARCH_FIELD,
  ROBOTS_FAILED,
  ROBOTS_PENDING,
  ROBOTS_SUCCESSFUL,
} from "./actionTypes";
import { fetchRequest } from "./api/api";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const fetchRobots = () => (dispatch) => {
  dispatch({ type: ROBOTS_PENDING });
  fetchRequest("https://jsonplaceholder.typicode.com/users")
    .then((data) => dispatch({ type: ROBOTS_SUCCESSFUL, payload: data }))
    .catch((error) => dispatch({ type: ROBOTS_FAILED, error }));
};
