import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/thunkRobots";
import Caanvas from "./components/HomePage/Caanvas";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const robots = useSelector((state) => {
    return state.robots;
  });

  return <Caanvas robots={robots} />;
}

export default App;
