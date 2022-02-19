import actionTypeRobots from "./actionTypeRobots";
import { loadRobotsAction, a } from "./actionsCreator";

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
        robots: robots,
      };

      const createdAction = loadRobotsAction(robots);

      expect(createdAction).toEqual(expectedAction);
    });
  });
});
