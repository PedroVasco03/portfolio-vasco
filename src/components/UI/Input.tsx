import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const baseStyles =
      "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors";

    const normal =
      "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
    const errorStyle =
      "border-red-500 focus:ring-red-500 focus:border-red-500";

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`${baseStyles} ${error ? errorStyle : normal} ${className ?? ""}`}
          {...props}
        />

        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
