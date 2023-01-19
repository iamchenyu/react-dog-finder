import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";

const DogRoutes = () => {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dog/:name" element={<Dog />} />
      {/* Option 1: render a not found component */}
      {/* <Route path="*" element={<NotFound />}></Route> */}
      {/* Option 2: redirect  */}
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
};

export default DogRoutes;
