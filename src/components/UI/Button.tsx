import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // função opcional para juntar classes

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-3xl font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#50C878] text-black hover:bg-[#5CF28E]-700 focus:ring-[#50C878]-500",
    secondary: "bg-[rgba(255,255,255,0.1)] text-white hover:bg-gray-700 focus:ring-gray-500" ,
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
