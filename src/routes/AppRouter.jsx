import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Components from "../pages/Components";
import { COMPONENTS_DATA } from "../data/componentsData";
import Home from "../pages/Home";
import Demo from "../components/Demo"

const AppRouter = () => {
  const defaultRoute = COMPONENTS_DATA[0].components[0].base;
  console.log(defaultRoute);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/components"
        element={<Navigate to={defaultRoute} replace />}
      />
      <Route path="/components/:componentKey" element={<Components />}>
        <Route path="demo" element={<Demo />} />
        <Route path="dependency" element={<div>Dependency Page</div>} />
        <Route path="props" element={<div>Props Page</div>} />
        <Route path="guide" element={<div>Guide Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
