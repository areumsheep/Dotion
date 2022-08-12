import React from 'react';
import styled from 'styled-components';
import Google from '@/assets/image/google.png';
import Input from '@/components/@common/Input';

const LoginPage = () => {
  return (
    <Wrapper>
      <Form>
        <h1>Dotion</h1>
        <div>
          <Input name={'아이디'} type={'text'} placeholder={'test1234'} />
          <Input name={'비밀번호'} type={'password'} placeholder={'test1234'} />
        </div>

        <div>
          <GoogleLoginButton>
            <img src={Google} alt="구글 로고" />
            구글 로그인
          </GoogleLoginButton>
          <Button type="submit">로그인</Button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.main`
  display: flex;
  height: 100%;
`;

const Form = styled.form`
  display: grid;
  align-items: center;
  ${({ theme }) => theme.mixins.boxShadow()};
  background: ${({ theme }) => theme.color.background.white};
  margin: auto;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  padding: 70px 50px;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.font.special};
    font-size: 45px;
    letter-spacing: -1px;
  }
  div > div {
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.color.button.secondary};
  color: ${({ theme }) => theme.color.font.teriary};
  width: 100%;
  height: 45px;
  font-size: 18px;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
const GoogleLoginButton = styled(Button)`
  ${({ theme }) => theme.mixins.flexBox()};
  background-color: #ffffff;
  color: #000000;
  border: 1px solid lightgray;

  img {
    height: 60%;
    margin-right: 10px;
  }
`;
