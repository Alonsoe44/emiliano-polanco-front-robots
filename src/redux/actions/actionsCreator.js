import actionTypeRobots from "./actionTypeRobots";

export const loadRobotsAction = (robotsPayload) => ({
  type: actionTypeRobots.loadRobots,
  robotsPayload: robotsPayload,
});

export const createRobotAction = (robotPayload) => ({
  type: actionTypeRobots.createRobot,
  robotPayload,
});
