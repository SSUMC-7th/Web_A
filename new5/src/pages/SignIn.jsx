import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const SignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().email("올바른 이메일 형식이 아닙니다."),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자로 입력해주세요")
      .max(16, "비밀번호는 8~16자로 입력해주세요"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
          hasError={!!errors.email}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
          hasError={!!errors.password}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register("passwordCheck")}
          hasError={!!errors.passwordCheck}
        />
        <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>

        <Button type="submit">제출</Button>
      </Form>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px; /* Title과 Input 간격 조정 */
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: ${(props) => (props.hasError ? "2px solid red" : "2px solid #ccc")};
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: ${(props) => (props.hasError ? "2px solid" : "2px solid #fc98b1")};
  }
`;

const Button = styled.button`
  width: 150px;
  background-color: #ff3366;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  width: 300px;
  text-align: left;
`;
