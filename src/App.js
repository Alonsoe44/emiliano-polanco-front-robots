import { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/thunkRobots";
import Caanvas from "./components/pages/HomePage/Caanvas";
import { Navigate, Route, Routes } from "react-router-dom";
import NavegationBar from "./components/NavegationBar/NavegationBar";
import MuseumPage from "./components/pages/MuseumPage/MuseumPage";
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
      <Suspense fallback={<div>Loading... </div>}>
        <NavegationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Caanvas />} />
          <Route path="robots" element={<MuseumPage robots={robots} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
