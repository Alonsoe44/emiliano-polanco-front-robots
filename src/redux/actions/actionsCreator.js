import actionTypeRobots from "./actionTypeRobots";

export const loadRobotsAction = (robotsPayload) => ({
  type: actionTypeRobots.loadRobots,
  robotsPayload: robotsPayload,
});

export const createRobotAction = (robotPayload) => ({
  type: actionTypeRobots.createRobot,
  robotPayload,
});

export const deleteRobotAction = (idPayload) => ({
  type: actionTypeRobots.deleteRobot,
  idPayload,
});
