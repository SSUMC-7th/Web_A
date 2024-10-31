import { useForm } from "react-hook-form";
import TextField from "../../component/text-field";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = ({ email, password }) => {
    const body = { email, password };
    // 실제 API 요청 등의 로직을 추가할 수 있습니다.
    reset();
  };

  // 첫 번째 비밀번호 필드 값 가져오기
  const password = watch("password");

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-white text-[2rem] font-medium">회원가입 페이지</h1>
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
          <TextField
            type="password"
            id="confirmPassword"
            placeholder="password, again"
            register={register}
            validation={{
              required: "필수 필드입니다.",
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            }}
            errors={errors}
          />
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white duration-200 rounded-md bg-[#F82E62] hover:brightness-50"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
