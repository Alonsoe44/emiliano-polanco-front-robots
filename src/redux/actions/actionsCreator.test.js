import actionTypeRobots from "./actionTypeRobots";
import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
} from "./actionsCreator";

describe("Given an loadRobotsAction", () => {
  describe("When it receives a group robots", () => {
    test("Then it should return an action with type loadRobots and the robots", () => {
      const robots = [
        {
          name: "Robocop",
          image: "iouhdfoiuhdfs",
          statistics: {
            velocity: 8,
            endurance: 3,
            creationDate: 2018,
          },
        },
        {
          name: "Robofe",
          image: "iouhfsefhdfs",
          statistics: {
            velocity: 2,
            endurance: 7,
            creationDate: 2046,
          },
        },
      ];
      const expectedAction = {
        type: actionTypeRobots.loadRobots,
        robotsPayload: robots,
      };

      const createdAction = loadRobotsAction(robots);

      expect(createdAction).toEqual(expectedAction);
    });
  });
});

describe("Given an createRobotsAction", () => {
  describe("When it receives a new robot", () => {
    test("Then it should return an action with type createrobot and payload robot", () => {
      const robot = {
        name: "Robocop",
        image: "iouhdfoiuhdfs",
        statistics: {
          velocity: 8,
          endurance: 3,
          creationDate: 2018,
        },
      };
      const expectedAction = {
        type: actionTypeRobots.createRobot,
        robotPayload: robot,
      };

      const createdAction = createRobotAction(robot);

      expect(createdAction).toEqual(expectedAction);
    });
  });
});

describe("Given an deleteRobotAction", () => {
  describe("When it receives an id of a robot", () => {
    test("Then it should return an action with type deleteRobots and the id of the robot to delete", () => {
      const id = 5;

      const expectedAction = {
        type: actionTypeRobots.deleteRobot,
        idPayload: id,
      };

      const createdAction = deleteRobotAction(id);

      expect(createdAction).toEqual(expectedAction);
    });
  });
});
