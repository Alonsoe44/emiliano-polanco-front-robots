import { Suspense } from "react";

import Caanvas from "./components/pages/HomePage/Caanvas";
import { Navigate, Route, Routes } from "react-router-dom";
import NavegationBar from "./components/NavegationBar/NavegationBar";
import MuseumPage from "./components/pages/MuseumPage/MuseumPage";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading... </div>}>
        <NavegationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Caanvas />} />
          <Route path="robots" element={<MuseumPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
