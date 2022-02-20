import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRobotAction } from "../../../redux/actions/actionsCreator";
import { loadRobotsThunk } from "../../../redux/thunks/thunkRobots";
import RobotStand from "../../components3d/RobotStand/RobotStand";

const MuseumPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const robots = useSelector((state) => {
    return state.robots;
  });
  const removeRobot = (id) => {
    console.log("its working");
    dispatch(deleteRobotAction(id));
  };

  return (
    <Canvas>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      {robots.map((robotState, index) => (
        <RobotStand
          key={robotState._id}
          robot={robotState}
          positionStand={[index * 7 - 15, 0, -5]}
          deleteFunc={removeRobot}
        />
      ))}
    </Canvas>
  );
};

export default MuseumPage;
