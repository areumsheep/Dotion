import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/@common/Layout';
import { LoginPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
