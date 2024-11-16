import { useForm } from "react-hook-form";
import TextField from "../../component/text-field";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = ({ email, password }) => {
    const body = { email, password };
    reset();
  };

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-white text-[2rem] font-medium">로그인 페이지</h1>
      <div className="w-full max-w-md rounded-md shadow-md bg-light-color">
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="email"
            id="email"
            placeholder="email"
            register={register}
            validation={{
              required: "필수 필드입니다.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "올바른 이메일 형식을 입력하세요.",
              },
            }}
            errors={errors}
          />
          <TextField
            className="mt-[1.2rem]"
            type="password"
            id="password"
            placeholder="password"
            register={register}
            validation={{
              required: "필수 필드입니다.",
              maxLength: { value: 20, message: "최대 20자입니다." },
              minLength: { value: 8, message: "최소 8자입니다." },
            }}
            errors={errors}
          />
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white duration-200 rounded-md bg-[#F82E62] hover:brightness-50"
            >
              로그인
            </button>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-50">
            아이디가 없다면?{" "}
            <a href="/register" className="font-medium hover:underline">
              회원가입
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
