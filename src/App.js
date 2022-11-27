import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import { getUser } from "./utils";

const ProtectedRoute = ({ children }) => {
  if (!getUser()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

const UnProtectedRoute = ({ children }) => {
  if (getUser()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Todo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <UnProtectedRoute>
            <Signup />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <UnProtectedRoute>
            <Signin />
          </UnProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
