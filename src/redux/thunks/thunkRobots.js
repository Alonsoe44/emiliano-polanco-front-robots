import { loadRobotsAction } from "../actions/actionsCreator";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(apiUrl, {
    mode: "cors", // this don't work even with no-cors
  });

  const receibedRobots = await response.json();

  dispatch(loadRobotsAction(receibedRobots));
};
