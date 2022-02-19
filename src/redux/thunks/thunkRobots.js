import { createRobotAction, loadRobotsAction } from "../actions/actionsCreator";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(apiUrl);
  const receibedRobots = await response.json();
  dispatch(loadRobotsAction(receibedRobots.robots));
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(apiUrl + "create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(robot),
  });

  if (response.ok) {
    const receibedRobot = await response.json();
    dispatch(createRobotAction(receibedRobot.robots));
  }
};
