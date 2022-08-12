import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Background from '@/assets/image/background.png';

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url(${Background}) no-repeat #f7fafc;
  background-size: cover;
`;
