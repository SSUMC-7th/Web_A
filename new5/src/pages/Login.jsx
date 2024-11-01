import React from "react";
import useForm from "../hooks/useForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { validateLogin } from "../../utils/validate";

const Login = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  console.log(login.values, login.errors, login.touched);

  return (
    <Wrapper>
      <Form>
        <Title>로그인</Title>
        <Input
          error={login.touched.email && login.errors.email}
          type={"email"}
          placeholder={"이메일을 입력해주세요."}
          {...login.getTextInputProps("email")}
        />
        {login.touched.email && login.errors.email && (
          <ErrorMessage>{login.errors.email}</ErrorMessage>
        )}

        <Input
          error={login.touched.password && login.errors.password}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요."}
          {...login.getTextInputProps("password")}
        />
        {login.touched.password && login.errors.password && (
          <ErrorMessage>{login.errors.password}</ErrorMessage>
        )}

        <Button onClick={handlePressLogin}>로그인</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
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
  border: 1px solid #ccc;
  border-radius: 5px;

  border: ${(props) => (props.error ? "2px solid red" : "2px solid #ccc")};

  &:focus {
    outline: ${(props) => (props.error ? "1px solid red" : "2px solid #fc98b1")}
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

// const Login = () => {
//   const schema = yup.object().shape({
//     email: yup.string().email("올바른 이메일 형식이 아닙니다."),
//     password: yup
//       .string()
//       .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
//       .max(16, "비밀번호는 최대 16자 이하이어야 합니다"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const onSubmit = (data) => {
//     console.log("폼 데이터 제출");
//     console.log(data);
//   };

//   return (
//     <Wrapper>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Title>로그인</Title>
//         <Input
//           type="email"
//           placeholder="이메일을 입력해주세요!"
//           {...register("email")}
//           hasError={!!errors.email}
//         />
//         <ErrorMessage>{errors.email?.message}</ErrorMessage>

//         <Input
//           type="password"
//           placeholder="비밀번호를 입력해주세요!"
//           {...register("password")}
//           hasError={!!errors.password}
//         />
//         <ErrorMessage>{errors.password?.message}</ErrorMessage>

//         <Button type="submit">로그인</Button>
//       </Form>
//     </Wrapper>
//   );
// };

// export default Login;
