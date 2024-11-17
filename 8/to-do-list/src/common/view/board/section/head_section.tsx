import { useNavigate } from "react-router-dom";

export default function HeadSection() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center">
      <h1
        className="font-semibold text-[2rem] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        TO DO LIST
      </h1>
    </section>
  );
}
