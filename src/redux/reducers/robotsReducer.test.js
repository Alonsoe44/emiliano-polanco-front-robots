import actionTypeRobots from "../actions/actionTypeRobots";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReduce", () => {
  let currentRobots;

  beforeEach(() => {
    currentRobots = [
      {
        name: "Robocop",
        image: "iouhdfoiufdadfs",
        statistics: {
          velocity: 10,
          endurance: 10,
          creationDate: 28,
        },
      },
      {
        name: "currentrobotitu",
        image: "iouhfsefhdfs",
        statistics: {
          velocity: 2,
          endurance: 7,
          creationDate: 1946,
        },
      },
    ];
  });

  describe("when it's called with no robots and no action", () => {
    test("Then it should return an empty array", () => {
      const expectedOutput = [];

      const newRobots = robotsReducer();

      expect(newRobots).toEqual(expectedOutput);
    });
  });

  describe("When it called with 2 robots and an loadaction with a payload of 3 robots", () => {
    test("Then it should return a new group of  the 3 robots of the payload", () => {
      const robotsPayload = {
        robots: [
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
          {
            name: "Robofe",
            image: "iouhfsefhdfs",
            statistics: {
              velocity: 2,
              endurance: 7,
              creationDate: 2046,
            },
          },
        ],
      };

      const action = {
        type: actionTypeRobots.loadRobots,
        robotsPayload: robotsPayload.robots,
      };

      const expectedRobots = [...robotsPayload.robots];

      const newRobots = robotsReducer(currentRobots, action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });
  describe("When it called with 2 robots and an createRobotAction with a new robot", () => {
    test("Then it should return a new group of  the 3 robots", () => {
      const robotPayload = [
        {
          name: "Robocop",
          image: "iouhdfoiuhdfs",
          statistics: {
            velocity: 8,
            endurance: 3,
            creationDate: 2018,
          },
        },
      ];

      const action = {
        type: actionTypeRobots.createRobot,
        robotPayload: robotPayload,
      };

      const expectedRobots = [...currentRobots, robotPayload];

      const newRobots = robotsReducer(currentRobots, action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
