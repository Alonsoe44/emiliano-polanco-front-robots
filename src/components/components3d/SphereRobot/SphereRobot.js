import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SphereRobot = ({ position, texture }) => {
  const sphere = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / 4;
    sphere.current.rotation.z = time;
    sphere.current.rotation.x = time;
  });
  return (
    <mesh ref={sphere} position={position} scale={2.5}>
      <sphereGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default SphereRobot;
