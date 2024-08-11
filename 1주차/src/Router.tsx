import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import PostList from "./pages/PostList";
import Write from "./pages/Write";
import Notice from "./pages/Notice";
import Correction from "./pages/Correction";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/correction" element={<Correction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
