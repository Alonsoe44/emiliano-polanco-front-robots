import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
      <h1>{robots}</h1>
    </div>
  );
}

export default App;
