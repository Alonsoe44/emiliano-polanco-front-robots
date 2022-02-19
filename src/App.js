import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/thunkRobots";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const robots = useSelector((state) => {
    return state.robots;
  });

  return (
    <div className="App">
      <h1 robots={robots}>Robots I am a robot bip bip bup</h1>
    </div>
  );
}

export default App;
