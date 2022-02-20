const DeleteSphere = ({ position, deleteFunc, idRobot }) => {
  return (
    <mesh position={position} scale={0.3} onClick={(e) => deleteFunc(idRobot)}>
      <sphereGeometry />
      <meshBasicMaterial color="#D9534F" />
    </mesh>
  );
};

export default DeleteSphere;
