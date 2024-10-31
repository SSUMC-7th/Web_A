export default function TextField({
  type,
  id,
  placeholder,
  register,
  validation,
  errors,
}) {
  return (
    <div className="mb-2">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
        {...register(id, validation)}
      />
      {errors[id] && (
        <div>
          <span className="text-red-500">{errors[id]?.message}</span>
        </div>
      )}
    </div>
  );
}
