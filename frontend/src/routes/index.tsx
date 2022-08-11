import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
