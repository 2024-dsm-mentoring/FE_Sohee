import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import SignIn from "./pages/Signin";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
