import actionTypeRobots from "./actionTypeRobots";

export const loadRobotsAction = (robotsPayload) => ({
  type: actionTypeRobots.loadRobots,
  robots: robotsPayload,
});
