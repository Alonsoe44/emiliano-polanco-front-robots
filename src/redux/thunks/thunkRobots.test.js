import actionTypeRobots from "../actions/actionTypeRobots";
import {
  createRobotThunk,
  deleteRobotThunk,
  loadRobotsThunk,
} from "./thunkRobots";

describe("Given a loadRobotsThunk", () => {
  describe("When it is called and API response it's ok", () => {
    test("Then it should call dispatch passing a loadRobotsAtion", async () => {
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

      const mockDispatch = jest.fn();
      const expectedAction = {
        type: actionTypeRobots.loadRobots,
        robotsPayload: robots,
      };

      await loadRobotsThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a creaRobotThunk", () => {
  describe("When it is called and API response it's ok", () => {
    test("Then it should call dispatch passing a createRobotAction", async () => {
      const robot = {
        name: "Robocop",
        image: "iouhdfoiuhdfs",
        statistics: {
          velocity: 8,
          endurance: 3,
          creationDate: 2018,
        },
      };
      const mockDispatch = jest.fn();

      const expectedAction = {
        type: actionTypeRobots.createRobot,
        robotPayload: robot,
      };

      const createThunk = createRobotThunk(robot);

      await createThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteRobotThunk", () => {
  describe("When it's called with an id parameter and api response is ok", () => {
    test("Then it should call dispatch passing a deleteRobotAction", async () => {
      const id = "621004783c53259d8f1";

      const expectedAction = {
        type: actionTypeRobots.deleteRobot,
        idPayload: id,
      };

      const mockDispatch = jest.fn();

      const deleteThunk = deleteRobotThunk(id);

      await deleteThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
