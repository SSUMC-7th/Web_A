import { cn } from "../../common/utils/cn";

export default function TextField({
  type,
  id,
  placeholder,
  register,
  validation,
  errors,
  className,
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={cn(className, "w-full px-4 py-2 bg-white border rounded-md")}
        {...register(id, validation)}
      />
      {errors[id] && (
        <div>
          <span className="text-red-500">{errors[id]?.message}</span>
        </div>
      )}
    </>
  );
}
