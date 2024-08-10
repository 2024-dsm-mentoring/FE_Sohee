import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import PostList from "./pages/PostList";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
