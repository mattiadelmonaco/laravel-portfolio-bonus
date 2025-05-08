import { BrowserRouter, Route, Routes, Router } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/projects" element={<ProjectListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
