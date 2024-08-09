import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalFont from "./styles/GlobalFont";
import Login from "./pages/Login";

export const Router = () => {
  return (
    <>
      <GlobalFont />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
