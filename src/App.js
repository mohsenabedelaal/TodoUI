import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
