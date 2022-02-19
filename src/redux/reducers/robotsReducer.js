import actionTypeRobots from "../actions/actionTypeRobots";

const robotsReducer = (currentRobots = [], action = {}) => {
  let newRobots = [];
  switch (action.type) {
    case actionTypeRobots.loadRobots:
      newRobots = [...action.robotsPayload];
      break;
    case actionTypeRobots.createRobot:
      newRobots = [...currentRobots, action.robotPayload];
      break;
    default:
      newRobots = [...currentRobots];
  }

  return newRobots;
};

export default robotsReducer;
