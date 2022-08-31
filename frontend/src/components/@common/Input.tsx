import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
}
const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;

  p {
    color: ${({ theme }) => theme.color.font.secondary};
    text-align: left;
    font-size: 13px;
    margin-bottom: 2px;
  }
  input {
    background-color: #ecedef;
    width: 100%;
    height: 40px;
    padding-left: 10px;
  }
`;
