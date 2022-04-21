import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import { Counter } from "./pages/counter/Counter";
import { Hooktest } from "./pages/hooklab/Hooktest";
import { VideoIndex } from "./pages/video/VideoIndex";
import { VideoShow } from "./pages/video/VideoShow";
import { VideoCreate } from "./pages/video/VideoCreate";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { TrackIpIndex } from "./pages/trackip/TrackIpIndex";
import { selectIsLogin } from "./pages/auth/authSlice";

function App() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Routes>
      <Route path="/" element={<VideoIndex />} />
      <Route path="/redux" element={<Counter />} />
      <Route path="/hook-test" element={<Hooktest />} />
      <Route path="/videos/:videoId" element={<VideoShow />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/ips" element={<TrackIpIndex />} />
      <Route
        path="/video-create"
        element={isLogin ? <VideoCreate /> : <Navigate to="/login" />}
      ></Route>
    </Routes>
  );
}

export default App;
