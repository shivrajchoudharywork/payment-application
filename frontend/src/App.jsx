import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Send } from "./routes/Send.jsx";
import { Dashboard } from "./routes/Dashboard.jsx";
import { SignIn } from "./routes/SignIn.jsx";
import { SignUp } from "./routes/SignUp.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/send" element={<Send/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
