import { BrowserRouter, Route, Routes, Router } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
