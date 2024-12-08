import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils/validate';

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid =
    !login.errors.email &&
    !login.errors.password &&
    login.values.email &&
    login.values.password;

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post('http://localhost:3000/auth/login', login.values);
      return response.data;
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setErrorMessage('');
      navigate('/');
    },
    onError: (error) => {
      if (error.response && error.response.status === 400) {
        setErrorMessage('로그인 실패: 이메일 또는 비밀번호를 확인해주세요.');
      } else {
        setErrorMessage('서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.');
      }
    },
  });

  const handleSubmit = () => {
    if (!isFormValid) {
      setErrorMessage('이메일과 비밀번호를 확인해주세요.');
      return;
    }
    mutation.mutate();
  };

  return (
    <PageContainer>
      <MainContainer>
        <LoginText>로그인</LoginText>
        <StyledInput
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...login.register('email')}
        />
        {login.touched.email && login.errors.email && (
          <ErrorText>{login.errors.email}</ErrorText>
        )}
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...login.register('password')}
        />
        {login.touched.password && login.errors.password && (
          <ErrorText>{login.errors.password}</ErrorText>
        )}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <SubmitButton
          type="button"
          disabled={!isFormValid || mutation.isLoading}
          onClick={handleSubmit}
          value={mutation.isLoading ? '처리 중...' : '로그인'}
        />
      </MainContainer>
    </PageContainer>
  );
};

export default LoginPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
  margin-top: -100px;
`;

const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const SubmitButton = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #ff1493;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:disabled {
    background-color: #333;
    color: #999999;
    pointer-events: none;
  }
`;

const LoginText = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -10px;
`;
