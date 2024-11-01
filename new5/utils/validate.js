const emailPattern = /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_-]+/;
const passwordPattern = /.{8,16}/;

function validateUser(values) {
  const errors = {
    email: "",
    password: "",
  };

  if (!values.email) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요!";
  } else if (emailPattern.test(values.email) === false) {
    errors.email = "이메일 형식에 맞지 않습니다.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 반드시 입력해 주세요.";
  } else if (passwordPattern.test(values.password) === false) {
    errors.password = "비밀번호는 8~16자로 입력해주세요.";
  }

  return errors;
}

function validateLogin(values) {
  return validateUser(values);
}

export { validateLogin };
