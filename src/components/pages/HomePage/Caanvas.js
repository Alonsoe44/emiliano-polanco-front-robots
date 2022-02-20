import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, ScrollControls, Scroll } from "@react-three/drei";
import Images from "./Images";

const Caanvas = () => {
  return (
    <Canvas
      className="canvas-container"
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={3}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1
              className="robo-title"
              style={{ position: "absolute", top: "60vh", left: "0.5em" }}
            >
              we
            </h1>
            <h1
              className="robo-title"
              style={{ position: "absolute", top: "120vh", left: "60vw" }}
            >
              are
            </h1>
            <h1
              className="robo-title"
              style={{
                position: "absolute",
                top: "198.5vh",
                left: "0.5vw",
                fontSize: "40vw",
              }}
            >
              robots
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
};

export default Caanvas;
