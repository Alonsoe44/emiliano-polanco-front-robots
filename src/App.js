import { Suspense } from "react";

import Caanvas from "./components/pages/HomePage/Caanvas";
import { Navigate, Route, Routes } from "react-router-dom";
import NavegationBar from "./components/NavegationBar/NavegationBar";
import MuseumPage from "./components/pages/MuseumPage/MuseumPage";
import FormPage from "./components/pages/FormPage/FormPage";
function App() {
  return (
    <>
      <Suspense fallback={<h1 className="robo-title">
			Loading... </h1>}>
        <NavegationBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Caanvas />} />
          <Route path="/robots">
            <Route index element={<MuseumPage />} />
            <Route path="/robots/create" element={<FormPage />} />
          </Route>
          <Route path="*" element={<MuseumPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
