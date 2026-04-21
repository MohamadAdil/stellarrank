// components/ui/Button.tsx
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  label: string;
  href?: string;
  icon?: string;
  variant?: "primary" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variantStyles = {
  primary: "bg-black text-white hover:bg-black/80",
  white: "bg-white text-black hover:bg-gray-200",
  outline: "border border-black text-black hover:bg-black hover:text-white",
};

const sizeStyles = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  label,
  href = "#",
  icon,
  variant = "white",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 ease-out ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative">
        {label}
      </span>

      {icon && (
        <span className="flex items-center justify-center transition-all duration-300 ease-out  ">
          <Image
            src={icon}
            alt="icon"
            width={16}
            height={16}
            className="transition-transform duration-300 ease-out group-hover:rotate-[45deg]"
          />
        </span>
      )}
    </Link>
  );
}