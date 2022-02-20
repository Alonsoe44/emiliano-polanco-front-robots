import { Canvas } from "@react-three/fiber";
import RobotStand from "../../components3d/RobotStand/RobotStand";

const MuseumPage = ({ robots }) => {
  return (
    <Canvas>
      {robots.map((robotState, index) => (
        <RobotStand
          key={robotState._id}
          robot={robotState}
          positionStand={[index * 7 - 15, 0, -5]}
        />
      ))}
    </Canvas>
  );
};

export default MuseumPage;
