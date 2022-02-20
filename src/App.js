import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/thunkRobots";
import Caanvas from "./components/pages/HomePage/Caanvas";
import { Navigate, Route, Routes } from "react-router-dom";
import NavegationBar from "./components/NavegationBar/NavegationBar";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const robots = useSelector((state) => {
    return state.robots;
  });

  return (
    <>
      <NavegationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<Caanvas />} />
      </Routes>
    </>
  );
}

export default App;
