import { UseFormRegister, FieldErrors, Path } from "react-hook-form";

interface FormFieldProps<T extends Record<string, any>> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "textarea";
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  className?: string;
  required?: boolean;
  rows?: number;
}

export default function FormField<T extends Record<string, any>>({
  name,
  label,
  placeholder,
  type = "text",
  register,
  errors,
  className = "",
  required = false,
  rows = 4,
}: FormFieldProps<T>) {
  const error = errors[name];
  const errorMessage = error?.message as string | undefined;

  const baseInputClasses = `ring-1 focus:ring-2 focus:outline-none rounded-lg p-2 w-full transition-all ${
    error
      ? "ring-[#ef4444] focus:ring-[#ef4444]"
      : "ring-gray-300 focus:ring-cyan-400"
  }`;

  return (
    <div className={`flex flex-col gap-1 h-fit ${className}`}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-[#ef4444] ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          className={`${baseInputClasses} resize-y`}
          placeholder={placeholder}
          rows={rows}
          {...register(name)}
        />
      ) : (
        <input
          id={name}
          type={type}
          className={baseInputClasses}
          placeholder={placeholder}
          {...register(name)}
        />
      )}

      {errorMessage && (
        <span className="text-[#ef4444] text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
