import { loadRobotsAction } from "../actions/actionsCreator";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(apiUrl);
  const receibedRobots = await response.json();
  dispatch(loadRobotsAction(receibedRobots.robots));
};
