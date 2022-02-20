import { useLoader } from "@react-three/fiber";
import Text3d from "../Text3d/text3d";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  textOptionsNormal,
  textOptionsTitle,
} from "../../../three-utils/textconfig";
import SphereRobot from "../SphereRobot/SphereRobot";
import DeleteSphere from "../DeleteSphere/DeleteSphere";

const RobotStand = ({ robot, positionStand, deleteFunc }) => {
  const userTexture = useLoader(TextureLoader, robot.image);
  const [x, y, z] = positionStand;

  return (
    <>
      <SphereRobot position={[x, y + 3, z]} texture={userTexture} />
      <Text3d
        text={robot.name}
        textOption={textOptionsTitle}
        positionStand={[x - 2, y - 1, z]}
      ></Text3d>
      <Text3d
        text={`Velocity            ${robot.statistics.velocity}`}
        textOption={textOptionsNormal}
        positionStand={[x - 2, y - 2.2, z]}
      ></Text3d>
      <Text3d
        text={`Endurance       ${robot.statistics.endurance}`}
        textOption={textOptionsNormal}
        positionStand={[x - 2, y - 2.9, z]}
      ></Text3d>
      <Text3d
        text={`Year                  ${robot.statistics.creationDate}`}
        textOption={textOptionsNormal}
        positionStand={[x - 2, y - 3.6, z]}
      ></Text3d>
      <DeleteSphere
        position={[x + 2, y - 4, z]}
        deleteFunc={deleteFunc}
        idRobot={robot._id}
      />
    </>
  );
};

export default RobotStand;
