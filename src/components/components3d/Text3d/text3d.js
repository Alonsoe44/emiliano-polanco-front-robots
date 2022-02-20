import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

extend({ TextGeometry });

const Text3d = ({ text, positionStand, textOption }) => {
  const [x, y, z] = positionStand;
  return (
    <mesh position={[x, y, z]}>
      <textGeometry attach="geometry" args={[text, textOption]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};

export default Text3d;
