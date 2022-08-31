import React from 'react';
import styled from 'styled-components';

const AdviceSelectPage = () => {
  return (
    <Wrapper>
      <Content>
        <h1>일침 강도를 선택해주세요.</h1>
      </Content>
    </Wrapper>
  );
};

export default AdviceSelectPage;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.boxShadow()};
  background: ${({ theme }) => theme.color.background.white};
  margin: auto;
  width: 1000px;
  height: 600px;
  border-radius: 20px;
  padding: 40px 30px;
`;
const Content = styled.div`
  h1 {
    color: ${({ theme }) => theme.color.font.special};
    font-size: 40px;
    letter-spacing: -1px;
  }
`;
