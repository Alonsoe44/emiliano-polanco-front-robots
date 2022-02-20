import { useFrame, useLoader } from "@react-three/fiber";
import Text3d from "../Text3d/text3d";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  textOptionsNormal,
  textOptionsTitle,
} from "../../../three-utils/textconfig";
import { useRef } from "react";

const RobotStand = ({ robot, positionStand }) => {
  const userTexture = useLoader(TextureLoader, robot.image);
  const [x, y, z] = positionStand;
  const sphere = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / 4;
    sphere.current.rotation.z = time;
    sphere.current.rotation.x = time;
  });

  return (
    <>
      <mesh ref={sphere} position={[x, y + 3, z]} scale={2.5}>
        <sphereGeometry />
        <meshBasicMaterial map={userTexture} />
      </mesh>
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
    </>
  );
};

export default RobotStand;
